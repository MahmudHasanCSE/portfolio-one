import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    console.log(portfolio);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    <>
                        <a className="portfolio-page" target="_blank" href="https://github.com/zero-fighter/Hamd-Shop">Hamd-Shop [E Commerce/E Shop/Online Shop]</a>
                        <a className="portfolio-page" target="_blank" href="https://github.com/zero-fighter/Student-Management-System">
                            Student-Management-System
                        </a>
                        <a className="portfolio-page" target="_blank" href="https://github.com/zero-fighter/Mist">Mist [Blog Site]</a>
                        {/*<a className="portfolio-page" target="_blank" href="https://github.com/zero-fighter/aster-properties">Aster-Properties</a>*/}
                        {/*<a className="portfolio-page" target="_blank" href="https://github.com/zero-fighter/blog">Blog Site</a>*/}
                        {/*<a className="portfolio-page" target="_blank" href="https://github.com/zero-fighter/django-boards">Django Forum Application</a>*/}
                    </>
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;