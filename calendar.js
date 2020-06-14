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
function calcDifference(holidayDate) 
{
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
function updateDate() 
{
    currentDate = new Date();
    document.querySelector("#independence-countdown").innerHTML = calcDifference(independenceDay);
    document.querySelector("#labor-countdown").innerHTML = calcDifference(laborDay);
    document.querySelector("#columbus-countdown").innerHTML = calcDifference(columbusDay);
    document.querySelector("#halloween-countdown").innerHTML = calcDifference(halloweenDay);
    document.querySelector("#veterans-countdown").innerHTML = calcDifference(veteransDay);
    document.querySelector("#thanksgiving-countdown").innerHTML = calcDifference(thanksgivingDay);
    document.querySelector("#christmas-countdown").innerHTML = calcDifference(christmasDay);
}

// Initially calls function upon before the 1st second happens
updateDate();

// Calls the updateDate function every second
var t = setInterval(updateDate, 1000);

// Shows Information for the Holiday of the Corresponding Tooltip Clicked
function showInfo(selectedHoliday)
{
    if (selectedHoliday=='newyear')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 style="text-decoration: underline;"> New Years Day </h1> <p> New Year's day occurrs on January 1st of every year. Many people use this time to set new goals and ambitions for themselves, also known as new year's resolutions. Mine this year was to get into Code Louisville and become a programmer :)</p>`;
    }
    else if (selectedHoliday=='mlk')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the mlk holiday will go here.";
    }
    else if (selectedHoliday=='president')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the president's day holiday will go here.";
    }
    else if (selectedHoliday=='stpatrick')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the st patricks's holiday will go here.";
    }
    else if (selectedHoliday=='memorial')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the memorial day holiday will go here.";
    }
    else if (selectedHoliday=='independence')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the independence day holiday will go here.";
    }
    else if (selectedHoliday=='labor')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the labor day holiday will go here.";
    }
    else if (selectedHoliday=='columbus')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the columbus day holiday will go here.";
    }
    else if (selectedHoliday=='halloween')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about halloween will go here.";
    }
    else if (selectedHoliday=='veterans')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about the veteran's day holiday will go here.";
    }
    else if (selectedHoliday=='thanksgiving')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about Thanksgiving will go here.";
    }
    else if (selectedHoliday=='christmas')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = "Information about Christmas will go here.";
    }
}

// Add a click event listener for the modal background to close out modal
document.querySelector(".modal-background").addEventListener("click", hideModal);


// Show Modal
function showModal() 
{
    document.querySelector(".modal-background").style.display="block";
    document.querySelector(".modal-display").style.display = "block";
}
// Function to hide modal
function hideModal()
{
    document.querySelector(".modal-background").style.display="none";
    document.querySelector(".modal-display").style.display="none";
}   