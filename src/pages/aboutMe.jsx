import React from "react";
import { Redirect } from "react-router";
import Profile from "../components/CardProfile";


const About = () =>{
    return (
        
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 m-3 g-4 my-5 justify-content-center">
                <Profile
                    name = 'Jose Luis Encarnacion'
                    description = 'I am a software developer, passionate for the web app development my main stack skills are:  '
                    github =  'https://github.com/joseEncarnacion' 
                    linkin = 'https://www.linkedin.com/in/joseluisencarnacion/'
                />
            </div>
        </div>
        
    )
}

export default About;