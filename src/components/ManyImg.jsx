import React, {useEffect, useState} from 'react';
import classes from '../style/module/MainContent/ManyImg.module.css'
import VideoComponent from "./VideoComponetn";
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
    },[currentPosition, imgArr]);

    return (
        <div className={classes.Slider} role="slider">
            <div className={classes.buttonAbsolute}>
                <div className={classes.buttons}>
                    <button className={classes.leftButton} onClick={backImage}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5858 6.00001L0.292908 1.70712L1.70712 0.292908L7.41423 6.00001L1.70712 11.7071L0.292908 10.2929L4.5858 6.00001Z" fill="white"/>
                        </svg>

                    </button>
                    <button className={classes.rightButon} onClick={nextImage}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5858 6.00001L0.292908 1.70712L1.70712 0.292908L7.41423 6.00001L1.70712 11.7071L0.292908 10.2929L4.5858 6.00001Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            {(currentImg.split('.')[currentImg.split('.').length - 1] === "mp4") ? <VideoComponent videoSrc = {currentImg}/> : <img src={currentImg} alt={'main img'}/>}
        </div>
    );
};

export default ManyImg;
