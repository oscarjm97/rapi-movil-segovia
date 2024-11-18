import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import data from '../../constants/data';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact section__padding bg__whitesmoke">
            <div
                id="contact"
                className="container text__center"
            >
                <h2 className="section__title text__cap">Dónde Estamos</h2>

                {/* Map with the address */}
                <div className="map-content">
                    <iframe
                        title="Rapi-Movil-Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.801838756224!2d-4.1144!3d40.94201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd413f606acae6a9%3A0xe4852c9d4db2065!2zUsOhcGlNw7N2aWwgU2Vnb3ZpYQ!5e0!3m2!1ses!2ses!4v1731881168759!5m2!1ses!2ses"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Contact Info */}
                <div className="info section__padding">
                    <div className="info-content">
                        <svg
                            width="1em"
                            height="1em"
                        >
                            <linearGradient
                                id="blue-gradient"
                                x1="100%"
                                y1="100%"
                                x2="0%"
                                y2="0%"
                            >
                                <stop
                                    stopColor="#55b3d5"
                                    offset="0%"
                                />
                                <stop
                                    stopColor="#5764de"
                                    offset="100%"
                                />
                            </linearGradient>
                        </svg>

                        <div className="item-list grid text-center">
                            {data.contacts.map((contact) => {
                                return (
                                    <div
                                        className="item translate-effect"
                                        key={contact.id}
                                    >
                                        <span className="item-icon">
                                            {contact.icon}
                                        </span>
                                        <div className="item-info-text fw_5 text-white">
                                            {contact.info}
                                        </div>
                                        <p className="text text-grey">
                                            {contact.text}
                                        </p>
                                        <div className="item-link text-grey">
                                            <BsArrowRightCircle size={30} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
