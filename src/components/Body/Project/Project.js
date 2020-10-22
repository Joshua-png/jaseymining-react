import React from 'react';
import {ProjectData} from './ProjectData';
import EachProject from './EachProject';
import Dots from '../Dots';
import Title from '../Title';

export default function Project(){
        return(
            <section className="site-section" id="gallery-section" data-aos="fade" style={{backgroundColor: '#ebfaeb' /*#d0cfcfde;*/ }}>
                 <div className="container">
                    <Title text="Products"/>
                    <div className="mt-4">
                      <Dots />
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                        {
                            ProjectData.map((item) => {
                                return(
                                    <EachProject key={item.key} image={item.image} alternate={item.alternate} display={item.display}/>
                                );
                            })
                        }
                     </div>
                   </div>
                </section>  
        );  
    
}