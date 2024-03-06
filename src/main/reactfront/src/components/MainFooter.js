import React from 'react'



const MainFooter = () => {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem'}}>
                <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p><i className="fa fa-phone-alt me-3" />010 3685 9473</p>
                    <br></br>
                    <p><i className="fa fa-envelope me-3" />wonki95891@gmail.com</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <h5 className="text-white mb-4">Quick Link</h5>
                    <a className="btn btn-link" href="https://github.com/wonki9589/jpaShop">View Source on github</a>
                    <a className="btn btn-link" href="https://blog.naver.com/wonki9589">Read My Blog</a>
                    </div>

                    <div className="col-md-6 col-lg-3">
                    <h5 className="text-white mb-4">Reference Link</h5>
                    <a className="btn btn-link" href="https://mui.com/">MUI</a>
                    <a className="btn btn-link" href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
                    <a className="btn btn-link" href="https://spring.io/projects/spring-boot">Spring Boot</a>
                    </div>

                    <div className="col-md-6 col-lg-3">
                    <h5 className="text-white mb-4">Newsletter</h5>
                    <p>Scheduled to be distributed in March </p>
                    
                    </div>
                </div>
                </div>
            </div>
            {/* Footer End */}
        </div>
    )
}

export default MainFooter
