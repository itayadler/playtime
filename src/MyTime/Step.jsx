import React from 'react';
import './Step.scss';

function Step({ name, time, color="white", classes="" , iconURL="", timerOn="false"}) {
  return (
    <div className = { "schedule " + (timerOn ? "" : "schedule__hidden " ) + color + " " + classes}>
      <div className="shedule__title-and-icon">
        <img src={iconURL} alt="" className="shedule__icon"/>
        <div className="schedule__title">{name}</div>
      </div>
      <div className="schedule__time">{time}</div>    
    </div>
  )
}

export default Step;

 