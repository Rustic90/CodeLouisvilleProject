
let dates;
function createDate() 
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
            document.querySelector(".container").innerHTML += `<p>${dates[i].name} <br> ${dates[i].date}</p>`;
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