import React, {useState} from "react";
import t from './TimerButtons.module.css'




const TimerButtons = (props) => {
    let [clicked, setClicked] = useState(false)

    const startMode = () => {
        props.start();
        clickedMode();


    }

    const clickedMode = () => {
        clicked ? setClicked(false) : setClicked(true)
    }

    return(
        <div className={t.buttonStyle}>
            {!clicked &&
            <button onClick={startMode}>Start</button>
            }
            {clicked &&
                <div>
                    <button onDoubleClick={props.stop}>Wait</button>
                    <button onClick={props.reset}>Stop</button>
                    <button onClick={props.resetStart}>Reset</button>
                    <button onClick={props.resume}>Resume</button>
                </div>
            }

        </div>
    )
}

export default TimerButtons;