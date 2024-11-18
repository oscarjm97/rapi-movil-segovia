import React from 'react';
import Navbar from '../Navbar/Navbar';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
    <div
        className="header"
        style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`,
        }}
    >
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">
                        Tecnología y Reparación
                    </h1>
                    <p className="para__text">
                        En Rapi Móvil estamos comprometidos con brindar la mejor
                        experiencia en reparación de dispositivos informáticos y
                        móviles. Pásate por nuestra tienda para conocernos.
                    </p>
                    <a
                        href="#contact"
                        className="btn btn__blue"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
