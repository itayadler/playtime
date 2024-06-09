import React from 'react';
import './Clock.scss';

function Clock() {

    var $hours = document.getElementById('hours');
    var $minutes = document.getElementById('minutes');

    setTimeout(function () {
    "use strict";

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    if (hours >= 6 && hours < 12) {
        $hours.className = 'left';
    } else {
        $hours.className = 'right';
    }

    if (minutes <= 30) {
        $minutes.className = 'back left';
    } else {
        $minutes.className = 'left';
    }

    set($hours,  30 * hours);
    set($minutes, 6 * minutes);
    }, 1000);

    function set ($elmt, deg) {
    "use strict";

    if ($elmt.id === 'hours' && deg < 180) {
        deg = deg - 5;
    }

    if ($elmt.id === 'minutes' && deg < 180) {
        deg = deg + 5;
    } else {
        deg = deg - 5;
    }

    $elmt.style.transform = 'rotate(' + deg + 'deg)';
    $elmt.style.webkitTransform = 'rotate(' + deg + 'deg)';
    }

  return (
    <div>
        <div id="watch">
        <div class="digit">
            <span>1</span>
        </div>
        <div class="digit">
            <span>2</span>
        </div>
        <div class="digit">
            <span>3</span>
        </div>
        <div class="digit">
            <span>4</span>
        </div>
        <div class="digit">
            <span>5</span>
        </div>
        <div class="digit">
            <span>6</span>
        </div>
        <div class="digit">
            <span>7</span>
        </div>
        <div class="digit">
            <span>8</span>
        </div>
        <div class="digit">
            <span>9</span>
        </div>
        <div class="digit">
            <span>10</span>
        </div>
        <div class="digit">
            <span>11</span>
        </div>
        <div class="digit">
            <span>12</span>
        </div>
        <div id="mickey"></div>
        <div class="left" id="hours"></div>
        <div class="right" id="minutes"></div>
        </div>
    
    </div>
  )
}

export default Clock;

 









