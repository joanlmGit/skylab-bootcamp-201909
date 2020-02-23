import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function () {
    return <>
        <body className="body-about">
            <div className="about">
                <h1 className="about-title">Eco Points</h1>
                <Link className="about-link" to='/'>Go to Map</Link>
                <div className="about-paragraph">
                    <h3 className="paragraf-title"> What is the purpose of the websuit?</h3>
                    <p className="paragraf-text">The objective of this app is to be able to garbage waste report with an image
                    all those places that we visit, focusing especially on non-urban places, inasmuch as the municipalities
                    allocate cleaning and garbage collection resources. Please use this site with responsibility in order to achieve a
                better sustainability of the environment that surrounds us and so, return its beauty to our environmen.<br />
                        The other purpose is to be able to give the locations to those
                        people, associations, groups, foundations or the administration itself, so that they can perform
                cleaning actions in the area. </p>
                    <br></br>
                    <br></br>
                    <h3 className="paragraf-title">Links of interest</h3>
                    <a className="paragraph-link" href="https://www.marineconservation.org.au/about/">Marine Conservation</a>
                    <a className="paragraph-link" href="https://www.cienciasambientales.org.es/"> Ciencias Ambientales</a>
                    <a className="paragraph-link" href="https://www.eaere.org/">EAERE</a>
                    <a className="paragraph-link" href="https://es.greenpeace.org/es/noticias/quieres-ayudar-a-frenar-la-contaminacion-por-plasticos/">Greenpeace</a>
                </div>

            </div>

        </body>
    </>
}