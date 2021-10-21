import React from "react";
import {useState, useEffect} from 'react'
import axios from "axios";
import CardEpi from "../components/CardEpisodio";
import {useParams} from 'react-router-dom'

const Personaje = () =>{

    const [personaje, setPersonaje] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        getData()
        
        
    }, []);

    const URL = `https://rickandmortyapi.com/api/character/${id}`;

    const getData = async () =>{
        const res = await axios.get(URL)
        setPersonaje(res.data)
        
        
    }



    return (
        <div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-3 g-4 my-5 justify-content-center">
            
            
            {
               <CardEpi
               key = {personaje.id}
               titulo = {personaje.name}
               descripcion = {personaje.species}
               status = {personaje.status}
               image = {personaje.image}
                
               />
            }
            
            
            </div>

        
        </div>
    )
}

export default Personaje;