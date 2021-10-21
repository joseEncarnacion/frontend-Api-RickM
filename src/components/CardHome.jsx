import React from "react";
import {Link} from 'react-router-dom'
import './styles/card.css'


const CardHome = (props) => {
    const {title, description, image, status, link} = props
    return (
        <div className="card m-2 card-style">
            
            <img src= {image} className="card-img-top" alt='none' />
            <div className ="card-body ">
                <h5 className ="card-title text-center titleCard">{title}</h5>
                <div className="d-flex justify-content-between cardText ">
                    <p className ="card-text"> {description} </p>
                    <p className ="card-text"> / </p>
                    <p className ="card-text"> {status} </p>
                </div>
                <div className="d-flex justify-content-center card-footer mt-3">
                    <Link to= {link} className="btn btn-dark btn-lg d-block">More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default CardHome