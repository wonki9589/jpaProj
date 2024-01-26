import React from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import Home from './pages/home';
import Footer from './components/footer';
import Header from './components/header';
import SignUp from './pages/signup';
import Login from './pages/login';

 


 
export default function router(){
    return(
        <>
            <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="signIn">SignIn</Link>
                <Link to="login">Login</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signIn" element={<SignUp />} />
                <Route path="login" element={<Login />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}