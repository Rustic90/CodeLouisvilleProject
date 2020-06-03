// Define Initial Date Objects 
var currentDate = new Date();

const newYearsDay = new Date(2020, 0, 1);
const mlkDay = new Date(2020, 0, 20);
const presidentsDay = new Date(2020, 1, 17);
const stPatricksDay = new Date(2020, 2, 17);
const memorialDay = new Date(2020, 4, 25);
const independenceDay = new Date(2020, 6, 4);
const laborDay = new Date(2020, 8, 7);
const columbusDay = new Date(2020, 9, 12);
const halloweenDay = new Date(2020, 9, 31);
const veteransDay = new Date(2020, 10, 11);
const thanksgivingDay = new Date(2020, 10, 26);
const christmasDay = new Date(2020, 11, 25);

// Accepts a Holiday Parameter and Calculates the Difference Between That and the Current Date
function calcDifference(holidayDate) {
    var dateDiff = holidayDate.getTime() - currentDate.getTime();
    var daysDiff = Math.floor(dateDiff / (24*60*60*1000));
    var hoursDiff = Math.floor(dateDiff / (60*60*1000));
    hoursDiff -= daysDiff*24;
    var minutesDiff = Math.floor(dateDiff / (60*1000));
    minutesDiff -= daysDiff*24*60 + hoursDiff*60;
    var secondsDiff = Math.floor(dateDiff / 1000);
    secondsDiff -= daysDiff*24*60*60 + hoursDiff*60*60 + minutesDiff*60;
    
    return `${daysDiff}d  ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s `;
}

// Creates a new current date object, calls difference function, then updates text
function updateDate() {
    currentDate = new Date();
    document.querySelector("#independence-countdown").innerHTML = calcDifference(independenceDay);
    document.querySelector("#labor-countdown").innerHTML = calcDifference(laborDay);
    document.querySelector("#columbus-countdown").innerHTML = calcDifference(columbusDay);
    document.querySelector("#halloween-countdown").innerHTML = calcDifference(halloweenDay);
    document.querySelector("#veterans-countdown").innerHTML = calcDifference(veteransDay);
    document.querySelector("#thanksgiving-countdown").innerHTML = calcDifference(thanksgivingDay);
    document.querySelector("#christmas-countdown").innerHTML = calcDifference(christmasDay);
}


updateDate();

// Calls the updateDate function every second
var t = setInterval(updateDate, 1000);