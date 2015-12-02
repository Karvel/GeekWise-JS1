/*
Elanna Grossman
November 29, 2015
GeekWise Javascript I

This file contains some shortcut functions
to manipulate the values for two input textboxes.
It also sets up an event handler to handle
button clicks on the page.
*/

// USER CODE - Put your code here!

var exArray = [];

//Pushes a new element from Input 1 to the end of the array.
function pushToArray()
{
	exArray.push(domInput1());
}//end pushToArray

// This function is called every time the button is clicked
function handleGoButtonClick(event)
{
	//logic to prevent function from adding empty elements to array
	if(domInput1())
	{
		pushToArray();
		domInput1("");
	}//end if

	if(domInput2())
	{
		for(var i = exArray.length - 1; i > -1; i--)
		{
			exArray[i + 1] = exArray[i];
		}//end for
		exArray[0] = domInput2();
		domInput2("");
	}//end if

	//concatenate variable
	var stringArray = exArray[0];
	for(var j = 1; j < exArray.length; j++)
	{
		stringArray += exArray[j];
		if(j < exArray.length - 1)
		{
			stringArray += ", ";
		}//end if
	}//end for
	domTextOutput(stringArray);
}//end handleGoButtonClick

// HELPER FUNCTIONS - The following code is helper functions to get you started

// This function sets and returns the value of Input 1
function domInput1(newval)
{
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined)
	{
		input1Reference.value = newval;
	}//end if
	return input1Reference.value;
}//end domInput1

// This function sets and returns the value of Input 2
function domInput2(newval)
{
	var input2Reference = document.getElementById("input2Id");
	if(newval !== undefined)
	{
		input2Reference.value = newval;
	}//end if
	return input2Reference.value;
}//end domInput2

// This function sets and returns the value of Input 2
function domTextOutput(newval)
{
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined)
	{
		textOutputReference.innerHTML = newval;
	}//end if
}//end domTextOutput

/* This is an Immediately Invoked Function Expression (IIFE)
   The code here runs immediately after the page loads.
   In this case, we are setting up an event handler for
   button presses.
*/
(function()
{
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());
