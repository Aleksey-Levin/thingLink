import React from 'react';
import Tag from "./Tag";
import VideoComponent from "./VideoСomponent";
import {resolveTag} from "../helper/resolve";

const EmbedContent = (props) => {
    console.log(resolveTag(props.data.data.url))
    return (
        <div id={props.id}>
            <Tag layout = {props.data.layout}/>
            <div>
                <VideoComponent videoSrc = {resolveTag(props.data.data.url)}/>
            </div>
        </div>
    );
};

export default EmbedContent;