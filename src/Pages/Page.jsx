import React, {useEffect, useState} from 'react';
import '../style/Page.css'
import '../style/media.css'
import {API} from '../API';
import AllContent from "../components/AllContent";
import axios from "axios";

const Page = () => {
    const [appState, setAppState] = useState();
    useEffect(() => {
        const apiUrl = 'https://www.thinglink.com/api/scene/1550818422290382850';
        axios.get(apiUrl).then((resp ) => {
            const allData = resp.data;
            setAppState(allData);
            console.log(appState);
        },[]);
    });
    return (
        <div className="allPageContent" lang={API['results']['owner'].language}>
            <ul className={'ulTransit'} role={'directory'}>
                {API['results']['tags'].map((item,index)=>(
                    <li role={'link'} key={item.id + Date.now()}><a href={"#"+item.layout}>{"Skip to " + item.layout}</a></li>
                ))}
            </ul>
            <header role="banner">
                <img
                    src='https://sun9-25.userapi.com/impg/0JE9hNVVYsgyWwoYAVi64tW1SsYTmeOpz3rvkA/7webzaL7vi4.jpg?size=930x501&quality=96&sign=5b32f588b1be2d2264bd7235d03c7c0b&type=album'
                    alt="Выбранный медиа-контент"
                    role="img"/>
            </header>
            <main className="container" role="main">
                <div className="nameAndAuthor">
                    <h1>{API['results'].title}</h1>
                    <p>{API['results']['owner'].name + " (author)"}</p>
                </div>
                {
                   API['results']['tags'].map((item,index)=>(
                       <AllContent key = {item.id + Date.now()} type = {item.layout} data = {API['results']['tags']} id={item.layout}/>
                    ))
                }
            </main>
        </div>
    );
};

export default Page;