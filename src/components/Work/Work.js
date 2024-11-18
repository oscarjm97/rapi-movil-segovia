import React, { useEffect, useRef, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import data from '../../constants/data';
import images from '../../constants/images';
import './Work.css';

const Work = () => {
    const modalRef = useRef(null);
    const [isImageModalOpened, setIsImageModalOpened] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    // Close the modal when a click is detected outside the modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsImageModalOpened(false);
            }
        };

        if (isImageModalOpened) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener when the modal is closed or component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isImageModalOpened]);


    const setImageOnModal = (src) => {
        setImageSrc(src);
        setIsImageModalOpened(true);
    };

    return (
        <div id="work" className="work">
            <div
                className={
                    isImageModalOpened
                        ? 'image__modal image__modal__show'
                        : 'image__modal'
                }
            >
                <div
                    className="image__modal--content"
                    ref={modalRef}
                >
                    <FaTimesCircle
                        className="modal__close--btn text__light bg__blue"
                        size={30}
                        onClick={() => setIsImageModalOpened(false)}
                    />
                    <img
                        src={imageSrc}
                        alt=""
                    />
                </div>
            </div>

            <div className="work__content grid">
                {data.works.map((work, index) => {
                    return (
                        <div
                            className="work__content--item"
                            key={index}
                            onClick={() => setImageOnModal(work.img)}
                        >
                            <img
                                src={work.img}
                                alt=""
                                className="img"
                            />
                            <div className="icon">
                                <img
                                    src={images.icon_eye}
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Work;
