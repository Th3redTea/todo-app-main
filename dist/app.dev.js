"use strict";

var input = document.getElementById('addTask');
var addinput = document.querySelector('.addCheckBox');
var list = document.getElementById('list');
var clear = document.getElementById('clear');
var itemsLeft = document.getElementById('itemsLeft');
var unorederdList = document.querySelector('.list');
var body = document.querySelector('body');
var filtersContainer = document.querySelector('.filters-container');
var item = document.querySelectorAll('.item');
var lightPic = document.querySelector('.light-mode');
var darkPic = document.querySelector('.dark-mode');
var sunIcon = document.getElementById('sunIcon');
var moonIcon = document.getElementById('moonIcon');
sunIcon.addEventListener('click', function () {
  lightPic.style.visibility = "visible";
  darkPic.style.visibility = "hidden";
  moonIcon.style.visibility = "visible";
  sunIcon.style.visibility = "hidden";
  input.style.backgroundColor = "white";
  input.style.color = "hsl(235, 19%, 35%)";
  unorederdList.style.backgroundColor = "white";
  body.style.backgroundColor = "white";
  filtersContainer.style.backgroundColor = "white";
  filtersContainer.style.color = "hsl(236, 9%, 61%)";

  if (item) {
    item.style.color = "hsl(236, 9%, 61%)";
  }
});
moonIcon.addEventListener('click', function () {
  lightPic.style.visibility = "hidden";
  darkPic.style.visibility = "visible";
  moonIcon.style.visibility = "hidden";
  sunIcon.style.visibility = "visible";
  input.style.backgroundColor = "hsl(235, 24%, 19%)";
  input.style.color = "hsl(234, 39%, 85%)";
  var unorederdList = document.querySelector('.list');
  unorederdList.style.backgroundColor = "hsl(235, 24%, 19%)";
  var body = document.querySelector('body');
  body.style.backgroundColor = "hsl(235, 21%, 11%)";
  var filtersContainer = document.querySelector('.filters-container');
  filtersContainer.style.backgroundColor = "hsl(235, 24%, 19%)";
  filtersContainer.style.color = "hsl(234, 39%, 85%)";
  var item = document.querySelectorAll('.item');
  item.style.color = "hsl(236, 33%, 92%)";
});
var todos = [];
var completedTodos = [];
var activeTodos = [];

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
  itemsLeft.innerHTML = "".concat(items.length, " items left");
  input.value = "";
});
var items = document.getElementsByClassName('item');

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

var showComplete = function showComplete() {
  Object.values(items).map(function (item) {
    console.log(item);

    if (item.classList.contains('complete')) {
      console.log('it has complete');
      item.classList.remove('hidden');
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
      item.classList.add('hidden');
    }
  });
};

clear.addEventListener('click', function () {
  todos.forEach(function (todo) {
    clearComplete(todo);
  });
});
var completed = document.getElementById('completed');
completed.addEventListener('click', showComplete);

var showActive = function showActive() {
  Object.values(items).map(function (item) {
    if (item.classList.contains('complete')) {
      item.classList.remove('visible');
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
      item.classList.add('visible');
    }
  });
};

var showAll = function showAll() {
  Object.values(items).map(function (item) {
    item.classList.remove('hidden');
  });
};

var active = document.getElementById('active');
active.addEventListener('click', showActive);
var all = document.getElementById('all');
all.addEventListener('click', showAll);