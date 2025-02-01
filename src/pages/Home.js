import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="main-content">
                <h2>Перевір свій сертифікат</h2>
                <p>
                    Перевір свій підпис тут і зараз. Просто вводь код та отримуй усю детальну інформацію по своїй фігурці
                </p>
                <form className="search-form">
                    <input type="text" placeholder="Введіть код..."></input>
                    <button type="submit">Пошук</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Home;