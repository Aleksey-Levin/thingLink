import React from 'react';
import ManyImg from "./ManyImg";
import Tag from "./Tag";
import classes from "../style/module/MainContent/MainContent.module.css"
const MainContent = (props) => {
    return (
        <div id={props.id}>
            <Tag layout = {props.data}/>
            <ManyImg data = {props}/>
            <audio className={classes.mainAudio} controls>
                <source src={props.data.audio}
                        type="audio/ogg; codecs=vorbis"></source>
            </audio>
            <h3>
                {props.data.data.title}
            </h3>
            <p className={classes.text}>
                {props.data.data.text}
            </p>
            <button className={classes.button}>
                <a href={props.data.data.url}>{props.data.data.cta}</a>
            </button>
        </div>
    );
};

export default MainContent;