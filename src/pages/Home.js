import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useNavigate} from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(code) {
            navigate(`/result/${code}`);
        }
    };


    return (
        <div className="home">
            <Header />
            <div className="main-content">
                <h2>Перевір свій сертифікат</h2>
                <div className="p-text">
                    <p>Перевір свій сертифікат тут і зараз.</p>
                    <p>Просто вводь код та отримуй усю детальну інформацію по своїй фігурці</p>
                </div>
                <form className="search-form" onSubmit={handleSearch}>
                    <input type="text" placeholder="Введіть код..." value={code} onChange={(e) => setCode(e.target.value)}></input>
                    <button type="submit">Пошук</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Home;