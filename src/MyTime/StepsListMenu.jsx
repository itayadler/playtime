import React from 'react';
import Step from './Step';


function StepsListMenu({stepsArr, isMenuOpen, currentStep }) {
  return (
    <div className={(isMenuOpen ? " " : "schedules-list__Closed") + " schedules-list "}>
    {stepsArr.map((elelemnt , index) => {
      let currentScheduleClassName = "";
      if(currentStep.order == index){
          currentScheduleClassName = "schedule__currentSchedule "
      }else if(index < currentStep.order){
          currentScheduleClassName = "schedule__paddedSchedule "
      }
      return <Step 
          key={index}
          name={stepsArr[index].name} 
          time={stepsArr[index].startTime} 
          color={stepsArr[index].color}
          iconURL={stepsArr[index].iconURL} 
          classes={currentScheduleClassName}  
      />
      }
  )}
  </div>
  )
}

export default StepsListMenu;