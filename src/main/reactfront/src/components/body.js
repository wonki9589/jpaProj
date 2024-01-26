import React from 'react'

const body = () => {
    return (
        <div>
        {/* About Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                    <img className="img-fluid" src="img/about.png" />
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">About Us</div>
                    <h2 className="mb-4">Award Wining Consultancy Agency For Your Business</h2>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod</p>
                    <div className="row g-3 mb-4">
                        <div className="col-12 d-flex">
                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                            <i className="fa fa-user-tie text-white" />
                        </div>
                        <div className="ms-4">
                            <h6>Business Planning</h6>
                            <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                        </div>
                        </div>
                        <div className="col-12 d-flex">
                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                            <i className="fa fa-chart-line text-white" />
                        </div>
                        <div className="ms-4">
                            <h6>Financial Analaysis</h6>
                            <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                        </div>
                        </div>
                    </div>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
                    </div>
                </div>
                </div>
            </div>
            {/* About End */}
            {/* Newsletter Start */}
            <div className="container-xxl bg-primary my-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container px-lg-5">
                <div className="row align-items-center" style={{height: 250}}>
                    <div className="col-12 col-md-6">
                    <h3 className="text-white">Ready to get started</h3>
                    <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                    <div className="position-relative w-100 mt-3">
                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: 48}} />
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
                    </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                    <img className="img-fluid mt-5" style={{maxHeight: 250}} src="img/newsletter.png" />
                    </div>
                </div>
                </div>
            </div>
            {/* Newsletter End */}
            {/* Service Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Services</div>
                    <h2 className="mb-5">We Provide Solutions On Your Business</h2>
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
                        <h5 className="mb-3">Business Research</h5>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
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
                        <h5 className="mb-3">Stretagic Planning</h5>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
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
                        <h5 className="mb-3">Market Analysis</h5>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
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
                        <h5 className="mb-3">Financial Analaysis</h5>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
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
                        <h5 className="mb-3">legal Advisory</h5>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
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
                        <h5 className="mb-3">Tax &amp; Insurance</h5>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Service End */}
            {/* Features Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Features</div>
                    <h2 className="mb-4">Why People Choose Us? We Are Trusted &amp; Award Wining Agency</h2>
                    <p>Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et sadipscing rebum amet takimata amet, sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
                    <p>Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
                    </div>
                    <div className="col-lg-7">
                    <div className="row g-5">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                            <i className="fa fa-cubes text-white" />
                            </div>
                            <h6 className="mb-0">Best In Industry</h6>
                        </div>
                        <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                            <i className="fa fa-percent text-white" />
                            </div>
                            <h6 className="mb-0">99% Success Rate</h6>
                        </div>
                        <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                            <i className="fa fa-award text-white" />
                            </div>
                            <h6 className="mb-0">Award Winning</h6>
                        </div>
                        <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                            <i className="fa fa-smile-beam text-white" />
                            </div>
                            <h6 className="mb-0">100% Happy Client</h6>
                        </div>
                        <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                            <i className="fa fa-user-tie text-white" />
                            </div>
                            <h6 className="mb-0">Professional Advisors</h6>
                        </div>
                        <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                            <i className="fa fa-headset text-white" />
                            </div>
                            <h6 className="mb-0">24/7 Customer Support</h6>
                        </div>
                        <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Features End */}
            {/* Client Start */}
            <div className="container-xxl bg-primary my-6 py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                <div className="owl-carousel client-carousel">
                    <a href="#"><img className="img-fluid" src="img/logo-1.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-2.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-3.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-4.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-5.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-6.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-7.png" alt /></a>
                    <a href="#"><img className="img-fluid" src="img/logo-8.png" alt /></a>
                </div>
                </div>
            </div>
            {/* Client End */}
            {/* Testimonial Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Testimonial</div>
                    <h2 className="mb-5">What Our Clients Say!</h2>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" />
                        <div className="ps-3">
                        <h6 className="mb-1">Client Name</h6>
                        <small>Profession</small>
                        </div>
                    </div>
                    </div>
                    <div className="testimonial-item rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" />
                        <div className="ps-3">
                        <h6 className="mb-1">Client Name</h6>
                        <small>Profession</small>
                        </div>
                    </div>
                    </div>
                    <div className="testimonial-item rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" />
                        <div className="ps-3">
                        <h6 className="mb-1">Client Name</h6>
                        <small>Profession</small>
                        </div>
                    </div>
                    </div>
                    <div className="testimonial-item rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" />
                        <div className="ps-3">
                        <h6 className="mb-1">Client Name</h6>
                        <small>Profession</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Team Start */}
            <div className="container-xxl py-6">
                <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
                    <h2 className="mb-5">Meet Our Team Members</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <h5>Full Name</h5>
                        <p className="mb-4">Designation</p>
                        <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-1.jpg" alt />
                        <div className="d-flex justify-content-center">
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <h5>Full Name</h5>
                        <p className="mb-4">Designation</p>
                        <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-2.jpg" alt />
                        <div className="d-flex justify-content-center">
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <h5>Full Name</h5>
                        <p className="mb-4">Designation</p>
                        <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-3.jpg" alt />
                        <div className="d-flex justify-content-center">
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <h5>Full Name</h5>
                        <p className="mb-4">Designation</p>
                        <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-4.jpg" alt />
                        <div className="d-flex justify-content-center">
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        {/* Team End */}
        </div>

    )
}

export default body
