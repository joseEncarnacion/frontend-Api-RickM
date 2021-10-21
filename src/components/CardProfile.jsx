import React from 'react'
import ProfileImg from'../utils/images/myProfile.png'
import './styles/cardProfile.css'

const Profile = (props) => {
    const {name, description, github, linkin} = props
    return(
        
                <div className="card cardProfile border-light">
                    <img src= {ProfileImg} alt="My-Profile-Foto" className="cardImg card-img-top" />
                    <div className="card-body cbody">
                        <div className="card-title cardTitle"> {name} </div>
                        <div className="card-text text-center">{description}</div>
                        <p className="card-text pt-3 text-center ">
                        •	JavaScript, Node.js, Express, React.js, Bootstrap, Scss, EJS, Jade(PUG), HTML, CSS, C#.
                        •	Database: MYSQL, MONGODB, MONGO ATLAS
                        •	Git, GitHub, Heroku deploy 
                        
                        </p>

                        <div className="card-footer d-flex justify-content-between mt-5">
                            <a  href= {github} className="btn btn-md btn-primary btnCard  ">Github</a> 
                            <a href= {linkin} className="btn btn-md btn-outline-success btnCard "> Linkedin </a>
                        </div>
                    </div>
                    
                </div>
          
    )
}


export default Profile