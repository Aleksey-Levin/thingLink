import React from 'react';

const Tag = (props) => {
    return (
        <div className="tagName">
            <img src="https://sun9-55.userapi.com/impg/ogfFlclxU0Rtx49iUGBFeehxoJ8O-KaFjLKdlA/BP2bbZPWvZ8.jpg?size=28x28&quality=96&sign=717578165a0d02a7975dcfcc4d5918f7&type=album" alt=""/>
            <h4>
                {props.layout}
            </h4>
        </div>
    );
};

export default Tag;