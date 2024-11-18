import React, { useRef } from 'react';
import WorkProcessVid from '../../assets/videos/video.mp4';
import './WorkProcess.css';

const WorkProcess = () => {
    const videoRef = useRef(null);

    return (
        <div className="workprocess section__padding">
            <div
                id="work-process"
                className="container"
            >
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">
                        Nuestro trabajo
                    </h2>
                    <p className="para__text">
                        Te presentamos nuestra tienda y el material del que
                        disponemos.
                    </p>

                    <div className="vid__container">
                        <video
                            ref={videoRef}
                            width="100%"
                            height="500px"
                            controls={true}
                            controlsList="nodownload"
                            autoPlay={false}
                            loop={true}
                        >
                            <source
                                src={WorkProcessVid}
                                type="video/mp4"
                            />
                            Su navegador no soporta el vídeo incluido.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
