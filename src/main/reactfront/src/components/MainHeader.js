import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';



export default function Header() {
    const [isLogin, setIsLogin] = useState(false); //로그인 관리
    const deleteSession = () => {
         sessionStorage.removeItem("login-token");
         sessionStorage.removeItem("username");
         sessionStorage.removeItem("ROLE");
     };

     useEffect(() => {
        if (sessionStorage.getItem("login-token") === null) {
          // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
          console.log("isLogin ??", isLogin);

        } else {
          // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
          // 로그인 상태 변경
          setIsLogin(true);
          console.log("isLogin ?? :: ", isLogin);
        }
      });

    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0">veggy</h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <Link href="/" className="nav-item nav-link" style={{textDecoration: 'none'}}> Home</Link>
                    <Link href="/shop" className="nav-item nav-link" style={{textDecoration: 'none'}} >Shop</Link>

                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                         <Link href="/checkout" className="nav-item nav-link" style={{textDecoration: 'none' ,padding : '5px' , color : 'gray'}}>Shipping Address</Link>
                         <Link href="/profile" className="nav-item nav-link" style={{textDecoration: 'none' ,padding : '5px' , color : 'gray'}}>Profile</Link>
                         <Link href="/board" className="nav-item nav-link" style={{textDecoration: 'none' ,padding : '5px' , color : 'gray'}}>Admin Board</Link>
                        </div>
                    </div>

                    </div>

                    {isLogin ? (
                            <Link href="/" onClick ={deleteSession} className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">
                              Logout
                            </Link>
                        ) : (
                            <Link href="/login" className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">
                              Login
                            </Link>
                    )}

                </div>
                </nav>
                <div className="container-xxl bg-primary hero-header">

                </div>
            </div>
            {/* Navbar & Hero End */}
        </div>

    )
}

