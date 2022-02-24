import React from 'react';
import Tag from "./Tag";

const TransitionContent = (props) => {
    return (
        <div id={props.id}>
            <Tag layout={props.data.layout}/>
            <div className="transition">
                <p><span className="transitionTo">Transition to:</span> {props.data.data.text}</p>
                <a className="moveNextScene">
                    Move to next scene
                </a>
            </div>
        </div>
    );
};

export default TransitionContent;