/*
Elanna Grossman
December 2, 2015
GeekWise Javascript I

More loop, input validation, and DOM practice
*/

//declarations
var dinoType;
var dinoEra;
var dinoFood;
var dinosaurs = [];
var numDino;

function dinosaur(type, era, food)
{
    dinosaurs.push([type, era, food]);
    return dinosaurs;
}//end dinosaur

function userInput()
{
    while(!numDino || typeof numDino !== "number")
    {
        numDino = parseInt(prompt("How many dinosaurs?"));
    }//end while

    for(var i = 0; i < numDino; i++)
    {
        while(!dinoType)
        {
            dinoType = prompt("What kind of dinosaur?");
        }//end while
        while(!dinoEra)
        {
            dinoEra = prompt("What era did it live in?");
        }//end while
        while(!dinoFood)
        {
            dinoFood = prompt("What were its eating habits?");
        }//end while
        dinosaur(dinoType, dinoEra, dinoFood);
        //reset prompts
        dinoType = "";
        dinoEra = "";
        dinoFood = "";
    }//end for
    outputDinosaur(dinosaurs);
}//end userInput

function outputDinosaur(dinosaurs)
{
    var dinosaurOutput = "";
    for(var i = 0; i < numDino; i++)
    {
        //simple if cumbersome output tp innerHTML
        dinosaurOutput += "<p>";
        dinosaurOutput += dinosaurs[i].join([separator = ', ']);
        dinosaurOutput += "</p>";
        document.getElementById("dinosaurList").innerHTML = dinosaurOutput;
    }//end for
}//end outputDinosaur

userInput();
