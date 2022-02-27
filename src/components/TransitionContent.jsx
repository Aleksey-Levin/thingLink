import React from 'react';
import Tag from "./Tag";
import classes from '../style/module/TransitionContent/TransitionContent.module.css'
import {allUrlFunction} from "../helper/functionComputed";

const TransitionContent = (props) => {
    return (
        <div id={props.id}>
            <Tag layout={props.data}/>
            <div className={classes.transition}>
                <p><span className={classes.transitionTo}>Transition to:</span> {props.data.data.text}</p>
                <a className={classes.moveNextScene} href={allUrlFunction['url'](props.id)}>
                    Move to next scene
                </a>
            </div>
        </div>
    );
};

export default TransitionContent;