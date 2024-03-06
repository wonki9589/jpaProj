import React from 'react'
import Fruit from '../assets/scss/components/fruit2.png';
const MainBody = () => {
    return (
        <div>
        {/* About Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                    <img className="img-fluid" src={Fruit} alt="main"/>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">About</div>
                    <h2 className="mb-4">Online Grocery Store Reservation</h2>
                    <div className="row g-3 mb-4">
                        <div className="col-12 d-flex">
                        </div>
                        <div className="col-12 d-flex">
                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                            <i className="fa fa-chart-line text-white" />
                        </div>
                        <div className="ms-4">
                            <h6 style={{textAlign : "right",
                                        textAlignVertical: "right"}}>
                                        This website is a fruit sales shop <br></br> implemented before payment.</h6>
                            
                        </div>
                        </div>
                    </div>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="https://github.com/wonki9589/jpaShop">Read More</a>
                    </div>
                </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Services</div>
                    <h2 className="mb-5">We Provide These Solutions</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded h-100">
                        <div className="d-flex justify-content-between">
                        <div className="service-icon">
                            <i className="fa fa-user-tie fa-2x" />
                        </div>
                        <a className="service-btn" href>
                            <i className="fa fa-link fa-2x" />
                        </a>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-3">High Security </h5>
                        <span>Using Spring Security,<br></br> we provide a highly secure environment.</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded h-100">
                        <div className="d-flex justify-content-between">
                        <div className="service-icon">
                            <i className="fa fa-chart-pie fa-2x" />
                        </div>
                        <a className="service-btn" href>
                            <i className="fa fa-link fa-2x" />
                        </a>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-3">Email Verification</h5>
                        <span>new password and order list will be sent via email.</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="service-item rounded h-100">
                        <div className="d-flex justify-content-between">
                        <div className="service-icon">
                            <i className="fa fa-chart-line fa-2x" />
                        </div>
                        <a className="service-btn" href>
                            <i className="fa fa-link fa-2x" />
                        </a>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-3">Administrator Page</h5>
                        <span>Authorized administrators can check members' personal information and order list.</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded h-100">
                        <div className="d-flex justify-content-between">
                        <div className="service-icon">
                            <i className="fa fa-chart-area fa-2x" />
                        </div>
                        <a className="service-btn" href>
                            <i className="fa fa-link fa-2x" />
                        </a>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-3">Edit Profile</h5>
                        <span>Provides a page where the member's information can be modified </span>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded h-100">
                        <div className="d-flex justify-content-between">
                        <div className="service-icon">
                            <i className="fa fa-balance-scale fa-2x" />
                        </div>
                        <a className="service-btn" href>
                            <i className="fa fa-link fa-2x" />
                        </a>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-3">shopping basket</h5>
                        <span>After rechecking the selected products, go to the reservation page</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="service-item rounded h-100">
                        <div className="d-flex justify-content-between">
                        <div className="service-icon">
                            <i className="fa fa-house-damage fa-2x" />
                        </div>
                        <a className="service-btn" href>
                            <i className="fa fa-link fa-2x" />
                        </a>
                        </div>
                        <div className="p-5">
                        <h5 className="mb-3">Access restrictions per page</h5>
                        <span>Restrict administrators, users, and unusual access elements.</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Service End */}
        </div>

    )
} 

export default MainBody
