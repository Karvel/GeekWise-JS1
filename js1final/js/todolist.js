/*
Elanna Grossman
December 6, 2015
GeekWise Javascript I
Final Project

Simple Todo List
*/

var todoArray = [];

function todoAdd(todoItem)
{
    //var todoListOutput += todoList[i].push;
    todoArray.push(todoItem);
    return todoArray;
}//end todoAdd

function getItem()
{
    var top = todoArray.length;
    var todoItem = document.getElementById("addItem").value;
    todoAdd(todoItem);
    document.getElementById("addItem").value = "";

    var list = document.getElementById("listContain");

    list.insertAdjacentHTML('afterbegin', '<li>' + todoArray[top] + '</li>');
    top += 1;
}//end getItem
