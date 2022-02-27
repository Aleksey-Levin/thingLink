import React from 'react';
import '../style/Page.css'
import '../style/media.css'
import {API} from '../helper/API';
import AllContent from "../components/AllContent";
import axios from "axios";

const Page = () => {
    // const [appState, setAppState] = useState();
    // useEffect(() => {
    //     const apiUrl = 'https://www.thinglink.com/api/scene/1550818422290382850';
    //     axios.get(apiUrl).then((resp ) => {
    //         const allData = resp.data;
    //         setAppState(allData);
    //         console.log(appState);
    //     },[]);
    // });
    return (
        <div className="allPageContent" lang={API['results']['owner'].language}>
            <ul className={'ulTransit'} role={'directory'}>
                {API['results']['tags'].map((item,index)=>(
                    <li role={'link'} key={item.id + Date.now()}><a href={"#"+item.layout}>{"Skip to " + item.layout}</a></li>
                ))}
            </ul>
            <header role="banner">
                <img
                    src={API['results'].url}
                    alt="Выбранный медиа-контент"/>
            </header>
            <main className="container" role="main">
                <div className="nameAndAuthor">
                    <h1>{API['results'].title}</h1>
                    <p>{API['results']['owner'].name + " (author)"}</p>
                </div>
                {
                   API['results']['tags'].map((item,index)=>(
                       <AllContent className = {'allContent'} key = {item.id + Date.now()} type = {item.layout} data = {API['results']['tags']} id={item.layout}/>
                    ))
                }
            </main>
        </div>
    );
};

export default Page;