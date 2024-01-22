import { useState } from "react";

function useTimer() {
  const [intervalId, setIntervalId] =useState()
  const [secs, setSecs] = useState(0)
  const startTimer = ()=>{
    //console.log('interval')
    setSecs(0)
    const intervalId = setInterval(()=>{
      //console.log('intervalID', intervalId);
      setSecs((actNum)=>{
        return actNum + 1
      })
    },1000)
    setIntervalId(intervalId)
  }

  const formatTime = ()=>{
    let seconds = secs % 60;
    let minutes = Math.floor(secs / 60);
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    // minutes = minutes < 10 ? '0'+ minutes.toString() : minutes.toString();
    // seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return `${hours}: ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  }

  const stopTimer = () =>{
    clearInterval(intervalId);
  }

  return [formatTime(), startTimer, stopTimer];
}
export  {useTimer}

// const [time, setTime] = useState({
//   hours: 0,
//   mins: 0,
//   secs: 0,
//   total: 0,
// });

// if (time.secs >= 60) {
//   setMins(time.secs / 60);
//   setSecs(0);
// } else if (time.secs < 60) {
//   setMins(secs + 1);
// }