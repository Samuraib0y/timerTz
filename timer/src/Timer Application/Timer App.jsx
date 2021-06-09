import React, {useState} from "react";
import TimerDisplay from "./Display/TimerDisplay";
import TimerButtons from "./TimerButtons/TimerButtons";
import t from './TimerApp.module.css'

const TimerApp = () => {


    const [time, setTime] = useState({h:0, m:0, s:0, ms:0})
    const [interv, setInterv] = useState();
    const [status,setStatus] = useState(0)

    let updateMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const start = () => {
        run();
        setInterv(setInterval(run, 10))
    }
    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    }

    const resume = () => start()
    const resetBtn = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    }




    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updateMs === 100){
            updatedS++;
            updateMs = 0;
        }
        updateMs++;
        return setTime({ms:updateMs, s:updatedS,m:updatedM,h:updatedH})
    }


    return(
        <div className={t.appStyle}>
            <TimerDisplay time={time}/>
            <TimerButtons resume={resume} start={start} stop={stop} reset={resetBtn} resetStart={resetStart}/>
        </div>
    )
}

export default TimerApp;