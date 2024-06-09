
import React, { useState, useEffect, useRef } from 'react';
import './MyTime.scss';
import Step from './Step';
import ScheduleXL from './ScheduleXL';
import StepsListMenu from './StepsListMenu';
import {scheduleLoading, schedules} from './schedules'
import {substractTime, isTimePositive, isBetweenStartAndEndTimes, setEndTimesOfSchedulesAndOrder} from './timeFunctions'

setEndTimesOfSchedulesAndOrder(); 

function MyTime({ history, user }) {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(currentDate.toLocaleTimeString(['en-GB'], {timeStyle: 'short'}));
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [currentSchedule, setCurrentSchedule] = useState(scheduleLoading[0])
    const [nextSchedule, setNextSchedule] = useState(schedules[1])
    const [timeLeftSchedule, setTimeLeftSchedule] = useState()
    const [timeLeftScheduleTimerOn, setTimeLeftScheduleTimerOn] = useState(false)


    
    const handleTimeToEndCurrentSchedule = () => {
        console.log(substractTime("00:00",currentTime)) // TODO: Why currentTime doesn't work?
        // return substractTime("00:00",currentTime)
    }

    const handleMenu = () => {
        //  console.log ("boo")
        setIsMenuOpen(!isMenuOpen);
    }

    const whatScheduleNow = async () => {
        let notNowCount = 0;
        // console.log("currentTime in whatScheduleNow ", currentTime)
        schedules.forEach((schedule, index) => {
            if (isBetweenStartAndEndTimes(currentTime, schedule.startTime, schedule.endTime)){
                setCurrentSchedule(schedules[index])
                if (currentSchedule !== schedules[index]){
                    whatScheduleNext(index)
                }        
                return
            }else{
                notNowCount++
                if(notNowCount == schedules.length){
                    setCurrentSchedule(scheduleLoading[0]) 
                }
            }        
        })
    }

    const whatScheduleNext = (currentScheduleIndex) => {
        
        // console.log(substractTime("10",timeLeftSchedule));

        if (currentScheduleIndex < (schedules.length - 1) ){
            setNextSchedule(schedules[currentScheduleIndex + 1])

            const nextEndTime = schedules[currentScheduleIndex].endTime
            setTimeLeftSchedule(substractTime(nextEndTime,currentTime))
            // console.log("nextEndTime",nextEndTime);
            // console.log("currentTime",currentTime);
            // console.log("substract them",substractTime(nextEndTime,currentTime));
             
            
        }else {
            setNextSchedule(schedules[0]) 
            setTimeLeftSchedule(substractTime("00:00",currentTime))
        }

    }

    let interval 
    let counter = 1;

    useEffect(() => {        
        const interval = setInterval(() => {

            setCurrentDate(new Date());
            setCurrentTime(currentDate.toLocaleTimeString(['en-GB'], {timeStyle: 'short'}))
            // setCurrentTime(currentDate.toLocaleTimeString(['en-GB'], {timeStyle: 'short', timeZone:'America/Anguilla'}))
            // setCurrentTime("01:00")
            whatScheduleNow()
            
            // handleTimeToEndCurrentSchedule()
            // whatScheduleNext()
            // console.log("timeLeftSchedule",timeLeftSchedule);
        }, 1000);
    return () => clearInterval(interval);
    }, [currentDate, currentTime]);

    return (
        <div className="myTime-container LAYOUT-pageContainer noselect">
            <StepsListMenu
                stepsArr={schedules}
                isMenuOpen={isMenuOpen}
                currentStep={currentSchedule}
            />
            <div className={"scheduleXL__container noselect " + currentSchedule.color}>
                <div className="myTime__NAV">
                    <div className="myTime__NAV--button" onClick={handleMenu}>
                        <p>MENU</p>    
                    </div>
                   
                </div>
                <div className={"scheduleXL__content"}>
                    <h1 className="scheduleXL__content--time">{currentTime}</h1>
                    <div className={"scheduleXL__content--item"}>
                        <ScheduleXL
                            name={currentSchedule.name} 
                            color={currentSchedule.color}
                            imgURL = {currentSchedule.imgURL}
                            // timeToEnd = {handleTimeToEndCurrentSchedule()}
                        />
                    </div>
                    <div className={"scheduleXL__nextSchedule" } >
                         <Step
                            name={nextSchedule.name} 

                            time={timeLeftSchedule}
                            timerOn={timeLeftScheduleTimerOn}
                            classes="nextSchedule"
                            iconURL={nextSchedule.iconURL}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTime


/// updated mytime
// import React, {useState, useEffect} from 'react';
// import './MyTime.scss';
// import TimeManager from './TimeManager';
// import Step from './Step';
// import ScheduleXL from './ScheduleXL';
// import StepsListMenu from './StepsListMenu';

// const [isMenuOpen, setIsMenuOpen] = useState(true);

// const handleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
// }

// function MyTime (TimeManager){
//     const {
//         currentDate,
//         setCurrentDate,
//         currentTime,
//         setCurrentTime,
//         schedules,
//         currentSchedule,
//         nextSchedule,
//         timeLeftSchedule,
//         whatScheduleNow
//       } = TimeManager;

//     return (
//         <div className="myTime-container LAYOUT-pageContainer noselect">
//             <StepsListMenu
//                 stepsArr={schedules}
//                 isMenuOpen={isMenuOpen}
//                 currentStep={currentSchedule}
//             />
//             <div className={"scheduleXL__container noselect " + currentSchedule.color}>
//                 <div className="myTime__NAV">
//                     <div className="myTime__NAV--button" onClick={handleMenu}>
//                         <p>MENU</p>    
//                     </div>
                   
//                 </div>
//                 <div className={"scheduleXL__content"}>
//                     <h1 className="scheduleXL__content--time">{currentTime}</h1>
//                     <div className={"scheduleXL__content--item"}>
//                         <ScheduleXL
//                             name={currentSchedule.name} 
//                             color={currentSchedule.color}
//                             imgURL = {currentSchedule.imgURL}
//                             // timeToEnd = {handleTimeToEndCurrentSchedule()}
//                         />
//                     </div>
//                     <div className={"scheduleXL__nextSchedule" } >
//                          <Step
//                             name={nextSchedule.name} 
//                             time={timeLeftSchedule}
//                             // timerOn={timeLeftScheduleTimerOn}
//                             classes="nextSchedule"
//                             iconURL={nextSchedule.iconURL}
//                         /> 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MyTime
