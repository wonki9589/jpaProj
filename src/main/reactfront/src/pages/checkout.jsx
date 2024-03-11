import React, { useContext } from "react";
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

const AddressSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .min(10, "Phone Number is too short")
    .max(10, "Phone Number is too long"),
  addressLine: Yup.string().required("Door No. & Street is required!"),
  city: Yup.string().required("City is required!"),
  state: Yup.string().required("State is required!"),
  code: Yup.string().required("ZIP/Postal code is required!"),
  country: Yup.string().required("Country is required!")
});

const LoginStep = () => {

  const checkoutDispatch = useContext(CheckoutDispatchContext);
  const handleContinueShopping = () => {
        window.location.replace("/shop");
  };
  const handleLoginAsDiffUser = () => {


  };
  const handleGotoLogin = () => {

  };
  const handleProceed = () => {
    setCheckoutStep(checkoutDispatch, CHECKOUT_STEPS.SHIPPING);
  };
  return (
    <div className="detail-container">
      <h2>Sign In now!</h2>

      <div className="actions">
        <button className="outline" onClick={() => handleContinueShopping()}>
          <i className="rsc-icon-arrow_back" /> Continue Shopping
        </button>
        <button  onClick={() => handleProceed()}>
          Proceed
          <i className="rsc-icon-arrow_forward" />
        </button>
      </div>
    </div>
  );
};

const AddressStep = () => {
  const checkoutDispatch = useContext(CheckoutDispatchContext);

  const handleBackToLogin = () => {
    setCheckoutStep(checkoutDispatch, CHECKOUT_STEPS.AUTH);
  };
  const handleSaveAddress = (addressData) => {
    saveShippingAddress(checkoutDispatch, addressData);
  };
  return (
    <div className="detail-container">
      <h2>Shipping Address</h2>
      <Formik
        initialValues={{
          // 로그인한 회원 배송정보 담을 곳
        }}
        validationSchema={AddressSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const addressData = { ...values };
            resetForm();
            handleSaveAddress(addressData);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {() => (
          <Form>
            <div className="field-group">
              <Field
                name="fullName"
                type="text"
                placeholder="Full Name"
                component={Input}
              />
              <Field
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                component={Input}
              />
            </div>
            <Field
              name="addressLine"
              type="text"
              placeholder="Door No. & Street"
              component={Input}
            />
            <div className="field-group">
              <Field
                name="city"
                type="text"
                placeholder="City"
                component={Input}
              />
              <Field
                name="state"
                type="text"
                placeholder="State"
                component={Input}
              />
            </div>
            <div className="field-group">
              <Field
                name="code"
                type="text"
                placeholder="ZIP/Postal Code"
                component={Input}
              />
              <Field
                name="country"
                type="text"
                placeholder="Country"
                component={Input}
              />
            </div>
            <div className="actions">
              <button
                type="button"
                className="outline"
                onClick={() => handleBackToLogin()}
              >
                <i className="rsc-icon-arrow_back" /> Login in as Different User
              </button>
              <button type="submit">
                Save Address
                <i className="rsc-icon-arrow_forward" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const PaymentStep = () => {
  const { shippingAddress } = useContext(CheckoutStateContext);
  const checkoutDispatch = useContext(CheckoutDispatchContext);
  const handleBackToAddress = () => {
    setCheckoutStep(checkoutDispatch, CHECKOUT_STEPS.SHIPPING);
  };
  const handlePayment = () => {};
  return (
    <div className="detail-container">
      <h2>Reservation</h2>

      <div className="actions">
        <button
          type="button"
          className="outline"
          onClick={() => handleBackToAddress()}
        >
          <i className="rsc-icon-arrow_back" /> Back to Shipping Details
        </button>
        <button disabled={!shippingAddress} onClick={() => handlePayment()}>
          Save Address
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

  const handleClickTimeline = (nextStep) => {
    setCheckoutStep(checkoutDispatch, nextStep);
  };

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
              <h2>Payment</h2>
              <i className="rsc-icon-check_circle" />
            </li>
          </ul>
          {step === CHECKOUT_STEPS.AUTH && <LoginStep />}
          {step === CHECKOUT_STEPS.SHIPPING && <AddressStep />}
          {step === CHECKOUT_STEPS.PAYMENT && <PaymentStep />}
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

          <ul className="total-breakup">
            <li>
              <p>Subtotal</p>
              <p>5000</p>
            </li>
            <li>
              <p>Tax</p>
              <p>5000</p>
            </li>
            <li>
              <p>Shipping</p>
              <p>5000</p>
            </li>
            <li>
              <h2>Total</h2>
              <h2>5000</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
