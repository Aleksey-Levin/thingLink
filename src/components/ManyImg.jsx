import React, {useEffect, useState} from 'react';
import classes from '../style/module/MainContent/ManyImg.module.css'
import VideoOmponent from "./VideoСomponent";
const ManyImg = (props) => {
    const imgArr = props.data.data.data.image.split('|');
    const [currentPosition, setCurrentPosition] = useState(0);
    const [currentImg, setCurrentImg] = useState(imgArr[currentPosition]);

    function nextImage(){
        setCurrentPosition(currentPosition+1);
    }

    function backImage(){
        setCurrentPosition(currentPosition > 0 ? currentPosition-1 : imgArr.length - 1);
        if(currentPosition < 0) setCurrentPosition(imgArr.length - 1);
    }

    useEffect(()=>{
        setCurrentImg(imgArr[currentPosition % (imgArr.length)]);
    },[currentPosition]);

    return (
        <div className={classes.Slider} role="slider">
            <div className={classes.buttonAbsolute}>
                <div className={classes.buttons}>
                    <button className={classes.leftButton} onClick={backImage}>
                        <p>
                            &#62;
                        </p>
                    </button>
                    <button className={classes.rightButon} onClick={nextImage}>
                        <p>
                            &#62;
                        </p>
                    </button>
                </div>
            </div>
            {(currentImg.split('.')[currentImg.split('.').length - 1] == "mp4") ? <VideoOmponent videoSrc = {currentImg}/> : <img src={currentImg}/>}
        </div>
    );
};

export default ManyImg;
