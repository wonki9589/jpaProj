import React, { useContext , useState, useEffect } from "react";
import classNames from "classnames";
import {
  CheckoutStateContext,
  CheckoutDispatchContext,
  CHECKOUT_STEPS,
  setCheckoutStep,
  saveShippingAddress
} from "../contexts/checkout";
import { CartStateContext } from "../contexts/cart";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import _get from "lodash.get";
import Input from "../components/core/form-controls/Input";
import Link from '@mui/material/Link';
import API from '../api.js'

const LoginStep = () => {
  const userName = localStorage.getItem('username');
  const checkoutDispatch = useContext(CheckoutDispatchContext);
  const handleContinueShopping = () => {
        window.location.replace("/shop");
  };

  const handleProceed = () => {
    setCheckoutStep(checkoutDispatch, CHECKOUT_STEPS.SHIPPING);
  };


  return (
    <div className="detail-container">
      <h2 style={{textAlign : "center"}}> {userName} </h2>

      <div className="actions">
        <button className="outline" onClick={() => handleContinueShopping()}>
          <i className="rsc-icon-arrow_back" /> Continue Shopping
        </button>
        <button  onClick={() => handleProceed()}>
          Shipping
          <i className="rsc-icon-arrow_forward" />
        </button>
      </div>
    </div>
  );
};

const AddressStep = () => {
  const checkoutDispatch = useContext(CheckoutDispatchContext);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSaveAddress = (addressData) => {
    // shipping -> payment 클릭하면 넘어가는 함수 
    saveShippingAddress(checkoutDispatch, addressData);
  };


  return (
    <div className="detail-container">
      <h2>Shipping Address</h2>
      <Formik
        initialValues={{

        }}
        onSubmit={
           API
           .get('/member',{
             params:{
                username : localStorage.getItem('username')
             }
           })
           .then((response) => {
                if(response.status === 200){
                    setUserName(response.data.username);
                    setEmail(response.data.email);
                    setCity(response.data.address.city);
                    setStreet(response.data.address.street);
                    setZipcode(response.data.address.zipcode);
                }
           })
           .catch((error) => {
           // 400 코드면 여기로옴
                console.log(error);
           })
        }
      >
        {() => (
          <Form>
            <div className="field-group">
               <Field
                  disabled
                  name="username"
                  type="text"
                  placeholder="username"
                  component={Input}
                  value = {username ||""}
                />
            </div>
            <div className="field-group">
              <Field
                disabled
                name="Email"
                type="text"
                placeholder="Email"
                component={Input}
                value = {email ||""}
              />
              <Field
                disabled
                name="City"
                type="text"
                placeholder="City"
                component={Input}
                value = {city ||""}
              />
            </div>
            <div className="field-group">
              <Field
                disabled
                name="Street"
                type="Street"
                placeholder="Street"
                component={Input}
                value = {street ||""}
              />
              <Field
                disabled
                name="Zipcode"
                type="text"
                placeholder="Zipcode"
                component={Input}
                value = {zipcode ||""}
              />
            </div>
            <div className="actions">
              <button
                type="button"
                className="outline"
              >
               <i className="rsc-icon-arrow_back" />
                <Link href="/profile" color="#008000" style={{ textDecoration : "none"}}>
                    Edit Profile
                </Link>
              </button>
              <button type="submit" onClick={() => handleSaveAddress()}>
                Reservation
                <i className="rsc-icon-arrow_forward" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
// shipping finish


const EmailStep = () => {

  const checkoutDispatch = useContext(CheckoutDispatchContext);

  const handleBackToAddress = () => {
    setCheckoutStep(checkoutDispatch, CHECKOUT_STEPS.SHIPPING);
  };
  const handleSendEmail = () => {};
  return (
    <div className="detail-container">
      <h2>email</h2>

      <div className="actions">
        <button
          type="button"
          className="outline"
          onClick={() => handleBackToAddress()}
        >
          <i className="rsc-icon-arrow_back" /> Back to Shipping Details
        </button>
        <button onClick={() => handleSendEmail()}>
          Send Email
          <i className="rsc-icon-arrow_forward" />
        </button>
      </div>
    </div>
  );
};


const Checkout = () => {
  const { items = [] } = useContext(CartStateContext);
  const { step, shippingAddress } = useContext(CheckoutStateContext);
  const checkoutDispatch = useContext(CheckoutDispatchContext);
  const totalItems = items.length;
  const [subTotal , setSubTotal] = useState(0);  
  const [shipping , setShipping] = useState(2);
  const [total , SetTotal] = useState(0);

  const handleClickTimeline = (nextStep) => {
    setCheckoutStep(checkoutDispatch, nextStep);
  };


  const subTotalSum = () => { 
    var sum= 0 ;
    const cartsItem = localStorage.getItem('cartItems');
    const cartItems = JSON.parse(cartsItem);

    for(var i =0; i<cartItems.length; i++){
       sum +=  cartItems[i].price * cartItems[i].quantity ;
    }
    setSubTotal(sum);
    SetTotal(subTotal+ shipping)
  }

  if(localStorage.getItem('username') == '' || localStorage.getItem('username') == null ){
      alert("로그인 후 이용 가능합니다.");
       document.location.href = "/login";
  }else{
  }

  useEffect( () => {
    subTotalSum()
 },[])

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="order-details">
          <ul className="timeline">
            <li
              className={classNames({
                active: step === CHECKOUT_STEPS.AUTH
              })}
              onClick={() => handleClickTimeline(CHECKOUT_STEPS.AUTH)}
            >
              <h2>Sign In</h2>
              <i className="rsc-icon-check_circle" />
            </li>
            <li
              className={classNames({
                done: shippingAddress !== null,
                active: step === CHECKOUT_STEPS.SHIPPING
              })}
              onClick={() => handleClickTimeline(CHECKOUT_STEPS.SHIPPING)}
            >
              <h2>Shipping</h2>
              <i className="rsc-icon-check_circle" />
            </li>
            <li
              className={classNames({
                done: false,
                active: step === CHECKOUT_STEPS.PAYMENT
              })}
              onClick={() => handleClickTimeline(CHECKOUT_STEPS.PAYMENT)}
            >
              <h2>Reservation</h2>
              <i className="rsc-icon-check_circle" />
            </li>
          </ul>
          {step === CHECKOUT_STEPS.AUTH && <LoginStep />}
          {step === CHECKOUT_STEPS.SHIPPING && <AddressStep />}
          {step === CHECKOUT_STEPS.PAYMENT && <EmailStep />}
        </div>
        <div className="order-summary">
          <h2>
            Summary
            <span>{` (${totalItems}) Items`}</span>
          </h2>
          <ul className="cart-items">
            {items.map((product) => {
              return (

                <li className="cart-item" key={product.name}>
                  <img className="product-image" src={product.image} />
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <div className="product-total">
                    <p className="quantity">
                      {`${product.quantity} ${
                        product.quantity > 1 ? "Nos." : "No."
                      }`}
                    </p>
                    <p className="amount">{product.quantity * product.price}</p>
                  </div>
                </li>
              );
            })}
          </ul>


          {/* total price  */}
          <ul className="total-breakup">    
            <li>
              <p>Subtotal</p>
              <p>{subTotal}</p>
            </li>
            <li>
              <p>Shipping</p>
              <p>{shipping}</p>
            </li>
            <li>
              <h2>Total</h2>
              <h2>{total}</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

