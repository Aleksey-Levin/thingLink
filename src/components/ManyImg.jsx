import React, {useState} from 'react';
import classes from '../style/module/ManyImg.module.css'
const ManyImg = (props) => {

    //const [currentImg, setCurrentImg] = useState(props.imgArr[0]);

    return (
        <div className={classes.Slider} role="slider">
            <div className={classes.buttons}>
                <button className={classes.leftButton}>
                    <p>
                        &#62;
                    </p>
                </button>
                <button className={classes.rightButon}>
                    <p>
                        &#62;
                    </p>
                </button>
            </div>
        </div>
    );
};

export default ManyImg;
