import React from 'react';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid align__baseline text__light text__center">
                    <div className="footer__content--item footer__contact">
                        <h3 className="footer__title">Datos de Contacto</h3>

                        <ul className="footer__links">
                            <li>
                                <div className="footer__contact__data">
                                    <img
                                        src={images.icon_whatsapp}
                                        alt="WhatsApp"
                                    />
                                    <a href="tel:+34622585717">
                                        +34 622 58 57 17
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="footer__contact__data">
                                    <img
                                        src={images.icon_instagram}
                                        alt="Instagram"
                                    />
                                    <a
                                        href="https://www.instagram.com/rapi_movil"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content--item footer__contact mr-auto">
                        <h3 className="footer__title">Rapi Móvil.</h3>

                        <p className="para__text">
                            &copy; 2024 All rights reserved.<br></br>
                            Designed and developed by oscarjm97.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
