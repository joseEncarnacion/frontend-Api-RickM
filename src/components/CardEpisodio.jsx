import React from "react";
import { Fragment } from "react";

const CardEpi = (props) => {
    const {titulo, descripcion, image, status} = props
    return (

        <Fragment>
            <div className="card m-2 card-style">

                <img src={image} className="card-img-top" alt='none' />
                <div className="card-body ">
                    <h5 className="card-title text-center titleCard">{titulo}</h5>
                    <div className="d-flex justify-content-between cardText ">
                        <p className="card-text"> {descripcion} </p>
                        <p className="card-text"> / </p>
                        <p className="card-text"> {status} </p>
                       
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default CardEpi;