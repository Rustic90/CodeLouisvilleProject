// Canvas setup 
const canvas = document.getElementById("gameBoard");
let ctx = canvas.getContext("2d");
canvas.style.border="1px solid black";

// Variables for Word List
let wordList = 
[
    {holiday: "New Year", word: "resolution"},
    {holiday: "Martin Luther King Jr Day", word: "protests"},
    {holiday: "Martin Luther King Jr Day", word: "rights"},
    {holiday: "President's Day", word: "washington"},
    {holiday: "St Patrick's Day", word: "lucky"},
    {holiday: "Easter", word: "bunny"},
    {holiday: "Memorial Day", word: "heroes"},
    {holiday: "4th of July", word: "fireworks"},
    {holiday: "Halloween", word: "costume"},
    {holiday: "Halloween", word: "candy"},
    {holiday: "Veteran's Day", word: "soldiers"},
    {holiday: "Thanksgiving", word: "dinner"},
    {holiday: "Thanksgiving", word: "turkey"},
    {holiday: "Christmas", word:"santa"},
    {holiday: "Christmas", word: "ornament"}
];

// Variables for Game Logic
let guesses = 0;
let ran = Math.floor(Math.random()*wordList.length);
let wordObject = wordList[ran];
let holiday = wordObject.holiday;
let word = wordObject.word;
let wordArray = word.split('');
let stillPlaying = true;
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Change word array to dashes and populate screen with one dash per letter 
for (i=0;i<wordArray.length;i++)
{
    wordArray[i] = "-";
    var myLabel = document.createElement("label");
    myLabel.setAttribute("id", i);
    myLabel.innerHTML = wordArray[i];
    document.getElementById("word").appendChild(myLabel);
    
}

// Make Game Keyboard
for (i=0;i<alphabet.length;i++)
{
    var button = document.createElement("button");
    button.setAttribute("value", alphabet[i]);
    button.innerHTML = alphabet[i];
    button.setAttribute("onclick", "makeGuess('" + alphabet[i] + "')");
    document.getElementById("keyboard").appendChild(button);
}

// Logic when a player clicks a letter 
function makeGuess(letterChoice)
{
    document.getElementById("guessed-letters").innerHTML += letterChoice + ", ";
    if (word.includes(letterChoice))
    {
        for (j=0;j<word.length;j++) 
        {
            if (letterChoice == word.charAt(j))
            {
                wordArray[j] = letterChoice;
                document.getElementById(j).innerHTML = letterChoice; 
            }
            if (!wordArray.includes("-"))
            {
                setTimeout(function(){alert("You Guessed The Word Correctly!")}, 300);
                break;
            }
        }
    }
    else 
    {
        guesses++;
        drawPerson();
        if (guesses == 7)
        {
            setTimeout(function(){alert("Game Over - the word was " + word)}, 300);
        }
    }
}
// Draws hangman person based on number of incorrect guesses
function drawPerson() 
{
    switch(guesses)
    {
        // Draw stick above head
        case 1: ctx.moveTo(100, 0);
                ctx.lineTo(100, 30);
                ctx.stroke();
                break;
        // Draw head
        case 2: ctx.beginPath();
                ctx.arc(100, 50, 20, 0, 2* Math.PI);
                ctx.stroke();
                break;
        // Draw body
        case 3: ctx.moveTo(100, 70);
                ctx.lineTo(100, 130);
                ctx.stroke();
                break;
                
        // Draw left arm
        case 4: ctx.moveTo(100, 90);
                ctx.lineTo(80, 110);
                ctx.stroke();
                break;
        // Draw right arm
        case 5: ctx.moveTo(100, 90);
                ctx.lineTo(120, 110);
                ctx.stroke();
                break;
        // Draw left leg
        case 6: ctx.moveTo(100, 130);
                ctx.lineTo(70, 180);
                ctx.stroke();
                break;
        // Draw right leg
        case 7: ctx.moveTo(100, 130);
                ctx.lineTo(130, 180);
                ctx.stroke();
                break;
    }
}

document.getElementById("hint").innerHTML = `Holiday: ${holiday}`;
