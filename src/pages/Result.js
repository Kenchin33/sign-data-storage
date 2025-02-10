import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {fetchFigureData} from '../api/database';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/result.css';

const Result = () => {
    const {code} = useParams();
    const [figure, setFigure] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCharVisible, setIsCharVisible] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetchFigureData(code)
        .then((data) => {
            if(data) {
                console.log("Found data:", data);
                setFigure(data);
            } else {
                navigate('/not-found');
            }
        })
        .catch(() => {
            navigate('/not-found')
        })
        .finally(() => {
            setLoading(false);
        });
    }, [code]);

    if(loading){
        return(
            <div className='loader'>
                Loading
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        )
    }

    const tooggleCharVisibility = () => {
        setIsCharVisible(!isCharVisible)
    }

    const openFullScrenn = (imageUrl) => {
        setFullScreenImage(imageUrl);
    }

    const closeFullScreen = () => {
        setFullScreenImage(null);
    }

    return(
        <div className='results'>
            <Header />
            <div className='main-content'>
                {figure && (
                    <>
                        <div className='image-container'>
                            <img src={figure.imageUrl1} alt={figure.name} className='figure-image' onClick={() => openFullScrenn(figure.imageUrl1)}></img>
                            <img src={figure.imageUrl2} alt={figure.name} className='figure-image' onClick={() => openFullScrenn(figure.imageUrl2)}></img>
                        </div>
                        <h2>{figure.name}</h2>
                        <p><strong>Номер Сертифікату:</strong> {figure.certificationCode}</p>
                        <p><strong>Підписав:</strong> {figure.actor}</p>
                        <p><strong>Фраза:</strong> <em>{figure.phrase}</em></p>
                        <p><strong>Дата Підпису:</strong> {figure.signatureDate}</p>
                        <p className="toogle-char-btn" onClick={tooggleCharVisibility}>{isCharVisible ? "Закрити Додаткову Інформацію" : "Відкрити Додаткову Інформацію"}</p>
                        <div className={`item-char ${isCharVisible ? "open" : ""}`}>
                            <ul className="char-list">
                                <li className="char-list-item"><em>Тип фігурки:</em> {figure.figureType}</li>
                                <li className="char-list-item"><em>Назва фігурки:</em> {figure.figureName}</li>
                                <li className="char-list-item"><em>Ексклюзив:</em> {figure.exclusive}</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <Footer />

            {fullScreenImage && (
                <div className='fullscreen-overlay' onClick={closeFullScreen}>
                    <img src={fullScreenImage} alt='Full Screen' className='fullscreen-image'></img>
                </div>
            )}
        </div>
    )
}

export default Result;