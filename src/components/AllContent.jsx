import React from 'react';
import MainContent from "./MainContent";
import EmbedContent from "./EmbedContent";
import LabelContent from "./LabelContent";
import TransitionContent from "./TransitionContent";

const AllContent = (props) => {
    function findValue(needFind){
        for(let i = 0; i < props.data.length; i++){
            if(props.data[i].layout === needFind){
                return i;
            }
        }
    }
    let render;
    const type = props.type;
        if(type === "custom"){
            render = <MainContent data = {props.data[findValue("custom")]} id = {props.id} />
        }
        else if(type === "embed"){
            render = <EmbedContent data = {props.data[findValue("embed")]} id = {props.id}/>
        }
        else if(type === "label"){
            render = <LabelContent data = {props.data[findValue("label")]} id = {props.id}/>
        }
        else if(type === "transition"){
            render = <TransitionContent data = {props.data[findValue("transition")]} id = {props.id}/>
        }
        else{
            return (<div></div>)
        }
        return (
            <div>
                {findValue(type)!==0 ? <div className="line" role="separator"></div>: ''}
                <div className="allContent">
                    {render}
                </div>
            </div>
        )
};

export default AllContent;