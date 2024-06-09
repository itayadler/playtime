import {scheduleLoading, schedules} from './schedules'

export const substractTime = (XX,YY) =>{
    let hourXX = "";
    let minXX = "";
    let hourYY = "";
    let minYY = "";

    if(XX.includes(":")){
        hourXX = XX.split(":", 1);
        minXX = XX.split((":"), 2)[1];
        if (hourXX == 0){
          hourXX = 24
        }
    }else{
        hourXX = 0;
        minXX = XX;
    }

    if(YY.includes(":")){
        hourYY = YY.split(":", 1);
        minYY = YY.split((":"), 2)[1];
        if (hourYY == 0){
           hourYY = 24
        }
    }else{
        hourYY = 0;
        minYY = YY;
    }

    let hourResut = hourXX - hourYY;
    let minResult = minXX - minYY;

    if(minResult < 0){
        minResult = 60 + minResult
        hourResut = hourResut -1
    }
    return (hourResut + ":" + minResult)
}

export const isTimePositive = (queryTime) => {
    let hourQueryTime = queryTime.split(":", 1);
    return hourQueryTime >= 0
}

export const isBetweenStartAndEndTimes = (currentTime, startTime, endTime) => {   
    const isSmallerThanEndTime = isTimePositive(substractTime(endTime,currentTime))
    const isLargerThanStartTime = isTimePositive(substractTime(currentTime,startTime))
    return (isSmallerThanEndTime && isLargerThanStartTime)
}

export const setEndTimesOfSchedulesAndOrder = () => {
    // set the endTime of each shedule 1m before the startTime of the next shedule
    let endTimeHolder = "1:00";
    schedules.forEach((x, index) => {
        x.order = index;
        const schedule = schedules[schedules.length - 1 - index]
        endTimeHolder = substractTime(endTimeHolder , "01") 
        schedule.endTime = endTimeHolder;
        endTimeHolder = schedule.startTime;
    })
}

