import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Mission({icon,title,passage}){
    return(
        <div className="col-md-4 text-center unit-4-icon" data-aos="fade-up" data-aos-delay="">
        <i className= "img-fluid w-25 mb-4" style={{fontSize: 50,color:'#04ba32'}}><FontAwesomeIcon icon={icon} size="1x" color="green"/></i>
            <h3 className="card-title">{title}</h3>
            <p style={{textAlign: 'justify'}}>
              {passage}
            </p>
          </div>
    );
}