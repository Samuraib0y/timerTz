import React, {useEffect, useRef, useState} from "react";
import t from './DisplayStyle.module.css'


const TimerDisplay = (props) => {


    // const [timeHours, setTimerHours] = useState('00')
    // const [timeMinutes, setTimerMinutes] = useState('00')
    // const [timeSeconds, setTimerSeconds] = useState('00')
    //
    // let interval = useRef();
    //
    // const startTimer = () => {
    //     const countDownDate = new Date('June 9, 2021 00:00:00').getTime();
    //
    //     interval = setInterval(() => {
    //         const now = new Date().getTime();
    //         const distance = countDownDate - now;
    //
    //         const hours = Math.floor(distance %(1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    //         const minutes = Math.floor(distance %(1000 * 60 * 60) / (1000  * 60))
    //         const seconds = Math.floor(distance %(1000 * 60) / 1000)
    //
    //         if (distance < 0) {
    //                 clearInterval(interval.current)
    //         } else {
    //             setTimerHours(hours)
    //             setTimerMinutes(minutes)
    //             setTimerSeconds(seconds)
    //         }
    //     },1000)
    // }
    //
    // useEffect(() =>{
    //     startTimer();
    //     return () => {
    //         clearInterval(interval.current)
    //     }
    // })


    return (
        <div className={t.timerDisplay}>
            <div className={t.displayOne}>{
                <span>
                    {(props.time.h >= 10) ? props.time.h : '0' + props.time.h}
                </span>
            }</div>
            <div className={t.displayOne}>{
                <span>
                    {(props.time.m >= 10) ? props.time.m : '0' + props.time.m}
                </span>
            }</div>
            <div className={t.displayOne}>{
                <span>
                    {(props.time.s >= 10) ? props.time.s : '0' + props.time.s}
                </span>
            }</div>
        </div>
    )
}

export default TimerDisplay;