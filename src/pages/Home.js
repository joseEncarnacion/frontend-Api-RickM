import React from "react";
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import CardHome from "../components/CardHome";
import Header from '../components/Header'


const Home = () => {

    const [episodio, setEpisodio] = useState([]);

    useEffect(() => {
        fetchEpisodio()

    }, []);


    const URL = 'https://rickandmortyapi.com/api/character'
    const fetchEpisodio = async () => {
        const res = await axios.get(URL)
        setEpisodio(res.data.results)
        
    }

    return (
        <Fragment >
            <Header />
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-3 g-4 my-5 justify-content-center">

                    {
                        episodio.map(info => (
                            <CardHome
                                key={info.id}
                                title={info.name}
                                description={info.species}
                                status={info.status}
                                image={info.image}
                                link = {`/personaje/${info.id}`}

                            />

                        ))
                    }
                </div>

            </div>
        </Fragment>
    )
}

export default Home;