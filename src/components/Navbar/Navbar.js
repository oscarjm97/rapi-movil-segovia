import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <a
                        href="/"
                        alt=""
                        className="navbar__brand"
                    >
                        <img
                            src={images.logo_rapi_short}
                            alt="Rapi Movil"
                        />
                    </a>
                    <button
                        type="button"
                        className="navbar__open--btn text__light"
                        onClick={() => setToggleMenu(true)}
                    >
                        <FaBars size={26} />
                    </button>
                </div>

                <div className="navbar__collapse">
                    <ul className="navbar__nav">
                        <li className="nav__item">
                            <a
                                href="/"
                                className="nav__link text__upper fw__6 text__light nav__active"
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#about"
                                className="nav__link text__upper fw_6 text__light"
                            >
                                Sobre Nosotros
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#services"
                                className="nav__link text__upper fw_6 text__light"
                            >
                                Servicios
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#work-process"
                                className="nav__link text__upper fw_6 text__light"
                            >
                                Nuestro Trabajo
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#contact"
                                className="nav__link text__upper fw_6 text__light"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button
                            type="button"
                            className="navbar__close--btn text__light"
                            onClick={() => setToggleMenu(false)}
                        >
                            <FaTimes size={32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
                            <li className="nav__item">
                                <a
                                    href="/"
                                    className="nav__link text__upper fw__6 nav__active text__light"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Inicio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#about"
                                    className="nav__link text__upper fw__6 text__light"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#services"
                                    className="nav__link text__upper fw__6 text__light"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Servicios
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#work-process"
                                    className="nav__link text__upper fw__6 text__light"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Nuestro Trabajo
                                </a>
                            </li>
                            <li className="nav__item">
                                <a
                                    href="#contact"
                                    className="nav__link text__upper fw__6 text__light"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
