import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/notFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    return(
        <div className="not-found">
            <Header />
            <div className="main-content">
                <h2>Сертифікат не знайдено</h2>
                <p>На жаль, введений Вами номер сертифікату не було знайдено.</p>
                <button onClick={() => navigate('/')}>Повернутись на головну сторінку</button>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;