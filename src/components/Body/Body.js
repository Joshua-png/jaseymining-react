import React from 'react';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Dots from './Dots';
import Circle from './WhoWeAre/Circle';
import Missions from './Mission/Missions';
import Clients from './Clients/Clients';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import Gallery from './Gallery/Gallery';
import Project from './Project/Project';
import ContactInfo from './Contact/ContactInfo';
import Form from './Contact/Form';
import Footer from '../Footer/footer';

export default function Body(){
    return(
        <React.Fragment>
            <div className="site-section cta-big-image" id="about-section">
               <div className="container">
                    <WhoWeAre />
                    <Dots />
                    <Circle />
                </div> 
             </div>    
             <Missions />
             <Clients /> 
             <WhatWeDo /> 
             <Gallery />
             <Project />
             <ContactInfo />
             <Form />
             <Footer />
        </React.Fragment>
    );
}