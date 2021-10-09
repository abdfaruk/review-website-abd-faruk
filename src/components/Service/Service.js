import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, price, img} = props.service;
    return (
        <div className="cart-body">
                <div className="card-element">
                    <small><img src={img} alt="" /></small> <br />
                    <small className="course-text">Course Name: {name}</small> <br />
                    <small className="course-text-1">Cost: ${price}</small> <br />
                </div>
            </div>
    );
};

export default Service;