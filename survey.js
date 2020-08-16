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
    localStorage.setItem("takenSurvey", "yes"); 
    var choice;
    var surveyChoice = document.querySelectorAll('input[name="favorite-holiday"]');
    for (i=0; i<surveyChoice.length;i++)
    {
        if (surveyChoice[i].checked)
        {
            choice = surveyChoice[i].value;
            break;
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        document.getElementById("survey").innerHTML = "Thank you for voting!<br> Ability to see voting results coming soon." + this.responseText;
    };
    xhr.open("GET", "survey.php?q=" + choice);
    xhr.send();
}