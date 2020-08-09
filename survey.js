// Will not display the survey if the customer has already taken it
if (localStorage.getItem("takenSurvey") == null)
{
    localStorage.setItem("takenSurvey", "no");
}
if (localStorage.getItem("takenSurvey") == "no")
{
    var x = -302;
    var slideInTimer = setInterval(slideIn, 5);
}

// Slides in a survey from the left side of the screen
function slideIn()
{
           
    x++;
    document.getElementById("survey").style.left = x + "px";
    if (x == 2)
    {
        clearInterval(slideInTimer);
    }
}

// Closes survey window
function closeSurvey()
{
    document.getElementById("survey").style.display = "none";
}

// Processes completed survey (still in development)
function submitSurvey() 
{
    //localStorage.setItem("takenSurvey", "yes"); Uncomment once feature is coded
    alert("Survey feature coming soon");
}