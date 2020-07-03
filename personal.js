
let dates;
let dateObject;
let currentDate = new Date();
let dateDiff;
function createDate() 
{
if(document.getElementById("event-name").value != "" && document.getElementById("event-date").value != "")
{
    let eventName = document.getElementById("event-name").value;
    let eventDate = document.getElementById("event-date").value;
    if (localStorage.getItem("dateList") == null)
    {
        dates = [{name: eventName, date: eventDate}, {name: "", date: ""}, {name: "", date: ""}];
        let dateJSON = JSON.stringify(dates);
        localStorage.setItem("dateList", dateJSON);
    }
    else 
    {
        dates = JSON.parse(localStorage.getItem("dateList"));
        if (dates[1].name == "")
        {
            dates[1].name = eventName;
            dates[1].date = eventDate;
            let dateJSON = JSON.stringify(dates);
            localStorage.setItem("dateList", dateJSON);
        }
        else if (dates[2].name == "")
        {
            dates[2].name = eventName;
            dates[2].date = eventDate;
            let dateJSON = JSON.stringify(dates);
            localStorage.setItem("dateList", dateJSON);
        }
        else 
        {
            alert("All event slots are full. To create more, please clear the others first.");
        }
    }
}
else 
{
    alert("Please enter both a name and a date.");
}
    displayDates();
    
}

function displayDates()
{
    document.querySelector(".container").innerHTML = "";
    if (localStorage.getItem("dateList") == null) 
    {
        document.querySelector(".container").innerHTML = `<p></p>`;
        document.querySelector(".container").innerHTML += `<p>No Events Created Yet</p>`; 
    }
    else
    {
        dates = JSON.parse(localStorage.getItem("dateList"));
        for (i=0; i<dates.length; i++)
        {
            dateObject = new Date(dates[i].date)
            dateDiff = Math.ceil((dateObject - currentDate) / 86400000);
            if (isNaN(dateDiff))
            {
                document.querySelector(".container").innerHTML += `<p>Date not set yet</p>`;
            }
            else 
            {
                document.querySelector(".container").innerHTML += `<p>${dates[i].name} <br> Date: ${dates[i].date}<br> Days Left: ${dateDiff}</p>`;
            }
        }
    }
    
}

function clearDates()
{
    var answer = confirm("Are you sure you want to clear all dates?");
    if (answer == true)
    {
        localStorage.clear();
        displayDates();
    }
}

displayDates();