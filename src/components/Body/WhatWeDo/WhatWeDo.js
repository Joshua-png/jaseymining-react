import React from 'react';
import Title from '../Title';
import Dots from '../Dots';
import WhatWeDoCards from './WhatWeDoCards';

export default function WhatWeDo(){
    return(
        <section className="site-section border-bottom" id="section_3" style={{backgroundColor: '#ebfaeb', paddingbottom: 48}}>
            <div className="container">
                <div className="row mb-5">
                   <div className="col-12 text-center" data-aos="fade">
                       <Title text="What we do"/>
                        <p style={{marginBottom: 0}}>Jasey Mining Services Limited offering to the market cover.</p>
                   </div>
                </div>
                <Dots />
                <WhatWeDoCards />
              </div> 
         </section>      
        
    );
}