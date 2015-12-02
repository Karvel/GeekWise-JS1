/*
Elanna Grossman
November 30, 2015
GeekWise Javascript I

Intro to DOM methods
*/

var clickButton = 0;
function submitHandlerUp(event)
{
    clickButton++;
    document.getElementById("buttonCount").innerHTML = clickButton;
    loopChar();
}//end submitHandlerUp

function submitHandlerDown(event)
{
    if(clickButton > 0)
    {
        clickButton--;
    }//end if
    document.getElementById("buttonCount").innerHTML = clickButton;
    loopChar();
}//end submitHandlerDown

function submitHandlerReset(event)
{
    clickButton = 0;
    document.getElementById("buttonCount").innerHTML = clickButton;
    loopChar();
}//end submitHandlerReset

function loopChar(event)
{
    var outputStr = "";
    for(var i = 0; i < clickButton; i++)
    {
        outputStr += "<p>";
        for(var j = 0; j <= i; j++)
        {
            outputStr += "@";
        }//end for
        outputStr += "</p>";
    }//end for
    document.getElementById("asciiCount").innerHTML = outputStr;
}//end loopChar

document.getElementById("buttonUp").onclick = submitHandlerUp;
document.getElementById("buttonDown").onclick = submitHandlerDown;
document.getElementById("buttonReset").onclick = submitHandlerReset;
