import React from 'react';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a
                            href="#home"
                            className="footer__navlink"
                        >
                            Rapi Móvil.
                        </a>

                        <p className="para__text">
                            &copy; 2024 All rights reserved. Designed and
                            developed by oscarjm97.
                        </p>
                    </div>

                    <div className="footer__content--item footer__contact">
                        <h3 className="footer__title">Datos de Contacto</h3>

                        <ul className="footer__links">
                            <li>
                                <div className="footer__contact__data">
                                    <img
                                        src={images.icon_gmail}
                                        alt="Email"
                                    />
                                    <a href="mailto:rapimovil@gmail.com">
                                        rapimovil@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="footer__contact__data">
                                    <img
                                        src={images.icon_whatsapp}
                                        alt="WhatsApp"
                                    />
                                    <a href="tel:+34643363847">
                                        +34 622 58 57 17
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content--item footer__contact">
                        <h3 className="footer__title">Redes Sociales</h3>
                        <ul className="footer__links">
                            <li>
                                <div className="footer__contact__data">
                                    <img
                                        src={images.icon_instagram}
                                        alt="Instagram"
                                    />
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="footer__contact__data">
                                    <img
                                        src={images.icon_facebook}
                                        alt="Facebook"
                                    />
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
