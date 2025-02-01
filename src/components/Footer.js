import React from "react";
import '../styles/footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className='instagram-footer-link'>
                <a href='https://www.instagram.com/funko.hunter/' target='_blank' rel='noopener noreferrer'>
                    <img src='../img/instagram.png' alt='Instagram'></img>
                </a>
            </div>
            <p>&#169; Funko Hunter</p>
            <div className='telegram-footer-link'>
                <a href='https://t.me/funkohunter' target='_blank' rel='noopener noreferrer'>
                    <img src='../img/telegram.png' alt='Telegram'></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;