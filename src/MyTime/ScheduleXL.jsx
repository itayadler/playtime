import React from 'react';
import './ScheduleXL.scss';
import BreathingShape from './BreathingShape/BreathingShape';
import Button from "../button";


function ScheduleXL({ name, time, color="white", classes="" , imgURL="", iconURL=""}) {
  return (
    <div className = { "scheduleXL " + color + " " + " currentScheduleXL"}> 
      <div className="shedule__title-and-icon">
        <img src={iconURL} alt="" className="shedule__icon"/>
        <div className="schedule__title">{name}</div>
      </div>
      <img src={imgURL} alt="" className="shedule__img"/> 
      <div className="schedule__time">{time}</div>
      {
        (name == "פלייטיים") ? 
          <Button
          isLink={true}
          to={{
            pathname: `/playtime`,
          }}
          text="Playtime"
          /> 
         : ""
      }
      <BreathingShape/>
    </div>
  )
}

export default ScheduleXL;

 