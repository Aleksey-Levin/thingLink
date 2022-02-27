import React from 'react';
import {allUrlFunction} from "../helper/functionComputed";

const Tag = (props) => {
    return (
        <div className="tagName">
            <img src={allUrlFunction['url'](props.layout.nubbin)} alt=""/>
            <h4>
                {props.layout.layout}
            </h4>
        </div>
    );
};

export default Tag;