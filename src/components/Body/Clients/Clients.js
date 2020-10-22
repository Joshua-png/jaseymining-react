import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function Clients(){
    return(
        <section className="bg-light site-section testimonial-wrap pb-5" id="testimonials-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Our Clients</h2>
            <p>We appreciate the opportunity of working and building relationships with the following major clients.</p>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider ">
      <Carousel indicators={false}>
  <Carousel.Item>
     <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
            <img src="images/p_3.png" alt="p_7" className="img-fluid"/>
        </figure>
    </div>
  </Carousel.Item>
  <Carousel.Item>
     <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
        <img src="images/p_1.png" alt="p_1" className="img-fluid" />
        </figure>
     </div>
  </Carousel.Item>
  <Carousel.Item>
          <div className="testimonial">
            <figure className=" align-items-center justify-content-center">
              <img src="images/p_4.jpg" alt="p_5" className="img-fluid" />
            </figure>
          </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
        <img src="images/p_9.png" alt="p_9" className="img-fluid" />
        </figure>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
            <img src="images/p_11.jpg" alt="p_11" className="img-fluid" />
        </figure>
    </div>
  </Carousel.Item>
  <Carousel.Item>
         <div className="testimonial">
            <figure className=" align-items-center justify-content-center">
              <img src="images/p_12.png" alt="p_12" className="img-fluid" />
            </figure>
          </div>
  </Carousel.Item>
</Carousel>
        

      </div>
    </section>
    );
}