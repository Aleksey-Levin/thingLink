import React from 'react';
import classes from '../style/module/MainContent/VideoSlider.module.css'
const VideoComponent = (props) => {
    return (
        <div>
            <video className={classes.videoSlider}
                    controls="controls"
                    src={props.videoSrc}>
            </video>
        </div>
    );}

export default VideoComponent;