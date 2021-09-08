"use strict";

var input = document.getElementById('addTask');
var addinput = document.querySelector('.addCheckBox');
var list = document.getElementById('list');
var items = document.getElementsByClassName('item');
var clear = document.getElementById('clear');
console.log(items);
var todos = [];

var addTodo = function addTodo(value) {
  var item = {
    text: value,
    isComplete: false
  };

  if (value) {
    todos.push(item);
    var todo = todos[todos.length - 1];
    var listItem = document.createElement('li');
    listItem.classList.add('item');
    list.appendChild(listItem);
    var inputElement = document.createElement('input');
    inputElement.classList.add('completeCheckBox');
    inputElement.setAttribute("type", "checkbox");
    listItem.appendChild(inputElement);
    listItem.appendChild(document.createTextNode(todo.text));
    inputElement.addEventListener('change', function () {
      if (!todo.isComplete) {
        listItem.classList.add('complete');
        todo.isComplete = !todo.isComplete;
      } else if (listItem.classList.contains('complete')) {
        listItem.classList.remove('complete');
        todo.isComplete = !todo.isComplete;
      }
    });
  }
};

addinput.addEventListener('click', function () {
  addTodo(input.value);
  input.value = "";
});

var clearComplete = function clearComplete(todo) {
  Object.values(items).map(function (item) {
    if (item.textContent === todo.text && todo.isComplete) {
      item.remove();
      var idx = todos.indexOf(todo);

      if (idx !== -1) {
        todos.splice(idx, 1);
      }
    }
  });
};

clear.addEventListener('click', function () {
  todos.forEach(function (todo) {
    clearComplete(todo);
    console.log(todos);
  });
});