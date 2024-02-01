import React from 'react'

const header = () => {
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0">JPA Project</h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" czlassName="nav-item nav-link">Service</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                        <a href="feature.html" className="dropdown-item">Features</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="./login" className="btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5">login</a>
                </div>
                </nav> 
                <div className="container-xxl bg-primary hero-header">
                <div className="container">
                    <div className="row g-5 align-items-center">
                    <div className="col-lg-6 text-center text-lg-start"><h1>To-Do List</h1>
                        <p className="text-white pb-3 animated zoomIn" > 2. 백엔드에서 데이터 가져오기 <br></br>3.배포</p>
                        <a href className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Learn More</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid animated zoomIn" src="img/hero.png" alt />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
        </div>

    )
}

export default header
