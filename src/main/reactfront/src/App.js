import './App.css';
import SignUp from './pages/signup';
import Login from './pages/login'; 
import Home from './pages/Main';
import About from './pages/about';
import FindPw from './pages/findPw';
import Board from './pages/dashboard/Dashboard';
import Profile from './pages/profile';

import { BrowserRouter as Router, Route,Routes, Switch } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import CommonProvider from "./contexts/common";
import ProductsProvider from "./contexts/products";
import CartProvider from "./contexts/cart";
import CheckoutProvider from "./contexts/checkout";
import RouteWrapper from "./layouts/RouteWrapper";
import AuthLayout from "./layouts/AuthLayout";
import CommonLayout from "./layouts/CommonLayout";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import CheckoutPage from "./pages/checkout";
import "./assets/scss/style.scss";



function App() {
  return (


      <AuthProvider>
          <CommonProvider>
            <ProductsProvider>
              <CartProvider>
                <CheckoutProvider>
                  <Router>
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/login' component={Login} />
                      <Route path='/signup' component={SignUp} />
                      <Route path='/findPw' component={FindPw} />
                      <Route path='/board' component={Board} />
                       <Route path='/profile' component={Profile} />
                      <RouteWrapper
                        path="/shop"
                        exact
                        component={HomePage}
                        layout={CommonLayout}
                      />
                      <RouteWrapper
                        path="/checkout"
                        component={CheckoutPage}
                        layout={CommonLayout}
                      />
                      <RouteWrapper
                        path="/auth"
                        component={AuthPage}
                        layout={AuthLayout}
                      />
                    </Switch>
                  </Router>
                </CheckoutProvider>
              </CartProvider>
            </ProductsProvider>
          </CommonProvider>
        </AuthProvider>

  );
}

export default App;
