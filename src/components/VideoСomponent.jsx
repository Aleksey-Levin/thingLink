import React from 'react';
import classes from '../style/module/MainContent/VideoSlider.module.css'
const VideoComponent = (props) => {
    return (
        <div>
            <iframe className={classes.videoSlider}
                    controls="controls"
                    src={props.videoSrc}
                    frameBorder="0"
                    role='video'
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
);}

export default VideoComponent;