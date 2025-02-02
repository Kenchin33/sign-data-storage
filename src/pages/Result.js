import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {fetchFigureData} from '../api/database';
import { useParams } from 'react-router-dom';
import '../styles/result.css';

const Result = () => {
    const {code} = useParams();
    const [figure, setFigure] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFigureData(code)
        .then((data) => {
            if(data) {
                setFigure(data);
            } else {
                setError('Сертифікат не знайдено');
            }
        })
        .catch((err) => {
            setError('Error fetching data');
            console.error(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [code]);

    if(loading){
        return <div className='loader'>Loading...</div>
    }

    if(error){
        return <div className='error'>{error}</div>
    }

    return(
        <div className='results'>
            <Header />
            <div className='main-content'>
                <img src={figure.imageUrl1} alt={figure.name} className='figure-image'></img>
                <img src={figure.imageUrl2} alt={figure.name} className='figure-image'></img>
                <h2>{figure.name}</h2>
                <p><strong>Підписав:</strong> {figure.actor}</p>
                <p><strong>Фігурка: </strong> {figure.figureName}</p>
                <p><strong>Номер Сертифікату:</strong> {figure.certificationCode}</p>
                <p><strong>Дата Підпису: </strong> {figure.signatureDate}</p>
            </div>
            <Footer />
        </div>
    )
}

export default Result;