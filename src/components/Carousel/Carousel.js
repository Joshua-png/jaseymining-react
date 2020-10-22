import React from 'react';

export default function Carousels(){
    return(
        <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/jm_1.jpg)'}} data-aos="fade" id="home-section">
            <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-10 mt-lg-5 text-center">
                        <div className="single-text ">
                          <div className="slide">
                            <h1 className="text-uppercase" data-aos="fade-up">Jasey Mining Services</h1>
                            <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Optimizing the blasting experience for our clients</p>
                            <div data-aos="fade-up" data-aos-delay="100">
                              <a href="#contact-section" target="_blank" className="btn  btn-primary mr-2 mb-2">Get In Touch</a>
                            </div>
                          </div>

                          {/* <div className="slide">
                            <h1 className="text-uppercase" data-aos="fade-up">Blasting Consumables</h1>
                            <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Blast bag EVO, Blast hole liners, blast cones, blast balls, survey chains, boom UTE magazines.</p>
                            <div data-aos="fade-up" data-aos-delay="100">
                              <a href="#contact-section" target="_blank" className="btn  btn-primary mr-2 mb-2">Get In Touch</a>
                            </div>
                          </div>

                          <div className="slide">
                            <h1 className="text-uppercase" data-aos="fade-up">Quarrying services</h1>
                            <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">Drilling, blasting, mucking, crush & blending, etc.</p>
                            <div data-aos="fade-up" data-aos-delay="100">
                              <a href="#contact-section" target="_blank" className="btn  btn-primary mr-2 mb-2">Get In Touch</a>
                            </div>
                          </div> */}

                        </div>
                      </div>
                    </div>
                  </div>
                    <a href="#next" className="mouse smoothscroll">
                      <span className="mouse-icon">
                        <span className="mouse-wheel"></span>
                      </span>
                    </a>
                    
                  </div>
    );
}

