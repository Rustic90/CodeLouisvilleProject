// Define Initial Date Objects 
var currentDate = new Date();

const newYearsDay = new Date(2021, 0, 1);
const mlkDay = new Date(2021, 0, 18);
const presidentsDay = new Date(2021, 1, 15);
const stPatricksDay = new Date(2021, 2, 17);
const memorialDay = new Date(2021, 4, 31);
const independenceDay = new Date(2021, 6, 4);
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
    document.querySelector("#new-year-countdown").innerHTML = calcDifference(newYearsDay);
    document.querySelector("#mlk-countdown").innerHTML = calcDifference(mlkDay);
    document.querySelector("#presidents-countdown").innerHTML = calcDifference(presidentsDay);
    document.querySelector("#st-patricks-countdown").innerHTML = calcDifference(stPatricksDay);
    document.querySelector("#memorial-countdown").innerHTML = calcDifference(memorialDay);
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
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> New Years Day </h1> <p> New Year's day occurrs on January 1st of every year. Many people use this time to set new goals and ambitions for themselves, also known as new year's resolutions.</p> \"Mine this year was to get into Code Louisville and become a programmer :) \"`;
    }
    else if (selectedHoliday=='mlk')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Martin Luther King Jr Day</h1><p> Observed on the third Monday of January, this day celebrates the life and accomplishments of MLK. King was a leader in the civil rights movement before his death in 1968 at just age 39.</p> \"Mad respect to this guy and all he accomplished!\"`;
    }
    else if (selectedHoliday=='president')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> President's Day </h1> <p> Observed on the third Monday of February, Presidents' day is also known as Washington's birthday. This federal holiday is intended to celebrate the role the presidency plays in our country.</p> \"I guess these dudes did some pretty important stuff!\"`;
    }
    else if (selectedHoliday=='stpatrick')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> St. Patrick's Day</h1><p> While not a federal holiday, this Irish holiday is widely recognized and sometimes celebrated here in the US. It is usually accompanied by wearing green and drinking alcohol.</p> \"Will you all quit pinching me already???\"`;
    }
    else if (selectedHoliday=='memorial')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Memorial Day </h1> <p>Memorial Day is a federal holiday in the United States for honoring and mourning the military personnel who had died while serving in the United States Armed Forces.</p> \"No joke here. Seriously, these are people that made the ultimate sacrifice.\"`;
    }
    else if (selectedHoliday=='independence')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Independence Day (4th of July)</h1> <p>Independence Day is a federal holiday in the United States commemorating the Declaration of Independence of the United States, on July 4, 1776. </p> \"Yeah, show those Brits who's boss!\"`;
    }
    else if (selectedHoliday=='labor')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Labor Day </h1><p>Labor Day is a federal holiday in the United States celebrated on the first Monday in September to honor and recognize the American labor movement and the works and contributions of laborers to the development and achievements of the United States.</p> \"If today is Labor Day, how many babies were born?\"`;
    }
    else if (selectedHoliday=='columbus')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Columbus Day </h1> <p>Columbus Day is a federal holiday which officially celebrates the anniversary of Christopher Columbus's arrival in the Americas on October 12, 1492.</p> \"Where would we be without this guy? Europe.... we'd be in Europe.\"`;
    }
    else if (selectedHoliday=='halloween')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline">Halloween</h1><p>While not a federal holiday, Halloween is celebrated by more people than some other days. Children dress up in costumes and go Trick-or-Treating around neighborhoods, collecting candy and showing off their costumes.</p>\"Wait, how old is too old to go Trick-or-Treating again?\"`;
    }
    else if (selectedHoliday=='veterans')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Veteran's Day</h1><p>Veterans Day is a federal holiday in the United States observed annually on November 11, for honoring military veterans, that is, persons who have served in the United States Armed Forces.</p> \"Again no joke here. Mad respect to our veteran's!\"`;
    }
    else if (selectedHoliday=='thanksgiving')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline"> Thanksgiving </h1><p>Thanksgiving is a federal holiday in the United States, celebrated on the fourth Thursday of November. It originated as a harvest festival, and to this day the centerpiece of Thanksgiving celebrations remains Thanksgiving dinner.</p> \"This day is kinda meh for us picky eaters... but I love seeing family.\" `;
    }
    else if (selectedHoliday=='christmas')
    {
        showModal();
        document.querySelector(".modal-display").innerHTML = `<h1 class="underline">Christmas</h1><p>Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. </p> \"Is this not in everyone's top 3 favorite holidays?\"`;
    }
}

// Add a click event listener for the modal background to close out modal
document.querySelector(".modal-background").addEventListener("click", hideModal);

// Show Modal
function showModal() 
{
    document.querySelector(".modal-background").style.transition="2s";
    document.querySelector(".modal-background").style.display="block";
    document.querySelector(".modal-display").style.display = "block";
}
// Function to hide modal
function hideModal()
{
    document.querySelector(".modal-background").style.display="none";
    document.querySelector(".modal-display").style.display="none";
}   

function showDropDown() 
{
    document.querySelector(".drop-down-menu").style.display="block";
}

function hideDropDown()
{
    document.querySelector(".drop-down-menu").style.display="none";
}