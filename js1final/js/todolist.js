/*
Elanna Grossman
December 6, 2015
GeekWise Javascript I
Final Project

Simple Todo List
*/

function getItem()
{
    var todoItem = document.getElementById("addItem").value;
    document.getElementById("addItem").value = "";

    var list = document.getElementById("listContain");

    list.insertAdjacentHTML('afterbegin', '<li>' + todoItem + '</li>');
}//end getItem
