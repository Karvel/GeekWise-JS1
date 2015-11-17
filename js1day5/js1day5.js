/*
Elanna Grossman
November 16, 2015
GeekWise Javascript I

Return a square root calculated manually.
Return NaN for non numeric parameters. */
function sqNum(numero)
{
    if(typeof numero != "number")
    {
        return NaN;
    }//end if
    var numSq = numero * numero;
    return numSq;
}//end sqNum

/* Take a lowercase string and return one with
the first letter capitalized and a period added
at the end, if there is not one already. */
function mkSentence(str)
{
    if(typeof str !== "string")
    {
        return "";
    }//end if
    if(str[str.length -1] === ".")
    {
        return str[0].toUpperCase() + str.slice(1);
    }//end if
    else
    {
        var senString = str.concat(".");
        return str[0].toUpperCase() + senString.slice(1);
    }//end else
}//end mkSentence

/*Take a string argument and flip the first half and the second half.
Leaves the middle character in an odd numbered string unchanged. */
function splitString(str)
{
    if(typeof str !== "string" || str.length < 2)
    {
        return "";
    }//end if

    var strSplit = Math.floor(str.length / 2);
    var subStrTop = str.substring(0, strSplit);
    var subStrEnd = str.substring(str.length - strSplit, str.length);
    var mid = Math.round(str.length / 2);
    var subStrMid = str.substring(mid - 1, mid);

    if(str.length % 2 !== 0)
    {
        return subStrEnd + subStrMid + subStrTop;
    }//end if

    else
    {
        return subStrEnd + subStrTop;
    }//end else
}//end splitString

/* Return mean of 4 numbers; return NaN if not
an array or any of the four elements are NaN. */
function numMean(arrNum)
{
    if(typeof arrNum !== "object" ||
    (isNaN(arrNum[0]) || isNaN(arrNum[1]) ||
     isNaN(arrNum[2]) || isNaN(arrNum[3])))
    {
        return NaN;
    }//end if

    //To allow only four numbers as the arguments.
    if(arrNum.length != 4)
    {
        return "Please enter exactly four numbers to average.";
    }//end if

    var mean = (arrNum[0] + arrNum[1] + arrNum[2] +
                arrNum[3]) / arrNum.length;
    return mean;
}//end numMean

//The following are test calls.

//alert(sqNum(9));
//alert(mkSentence("fff"));
//alert(splitString("abc1efg"));
//alert(numMean([1, 2, 3, 6]));
