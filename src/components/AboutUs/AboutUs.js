import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
    <div className="about section__padding">
        <div
            id="about"
            className="container"
        >
            <div className="about__content text__center">
                <h2 className="section__title text__cap">Sobre Nosotros</h2>
                <p className="para__text text__grey">
                    Rapi Móvil es tu tienda de confianza para la reparación y
                    mantenimiento de dispositivos informáticos y móviles.
                    Ofrecemos soluciones rápidas, efectivas y económicas para
                    garantizar que tus dispositivos funcionen como nuevos. Ya
                    sea que necesites reparar un teléfono móvil, un ordenador
                    portátil, una tablet, o cualquier otro dispositivo
                    electrónico, nuestro equipo de expertos está aquí para
                    ayudarte.
                </p>
                <img
                    src={images.logo_rapi}
                    alt="Rapi Movil Logo"
                />
            </div>
        </div>
    </div>
);

export default AboutUs;
