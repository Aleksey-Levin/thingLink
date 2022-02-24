import React from 'react';
import Tag from "./Tag";

const LabelContent = (props) => {
    return (
        <div id={props.id}>
            <Tag layout = {props.data.layout}/>
            <div className="content">
                <p>
                    {props.data.data.text}
                </p>
            </div>
        </div>
    );
};

export default LabelContent;