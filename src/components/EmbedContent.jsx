import React from 'react';
import Tag from "./Tag";
import {resolveTag} from "../helper/resolve";
import IframeComponent from "./IframeСomponent";

const EmbedContent = (props) => {
    return (
        <div>
            <Tag layout = {props.data}/>
            <div>
                <IframeComponent videoSrc = {resolveTag(props.data.data.url)}/>
            </div>
        </div>
    );
};

export default EmbedContent;