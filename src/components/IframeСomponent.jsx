import React from 'react';
import classes from '../style/module/MainContent/VideoSlider.module.css'
import {resolveTag} from "../helper/resolve";
const IframeComponent = (props) => {
    return (
        <div>
            <iframe className={classes.videoSlider}
                    title="Embed video"
                    controls="controls"
                    src={resolveTag(props.videoSrc)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
);}

export default IframeComponent;