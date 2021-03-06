import React from 'react';
import Tag from "./Tag";

const LabelContent = (props) => {
    return (
        <div id={props.id}>
            <Tag layout = {props.data}/>
            <div>
                <p>
                    {props.data.data.text}
                </p>
            </div>
        </div>
    );
};

export default LabelContent;