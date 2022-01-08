var input = document.getElementById('addTask');
var addinput = document.querySelector('.addCheckBox');
var list = document.getElementById('list');
var clear = document.getElementById('clear');
var itemsLeft = document.getElementById('itemsLeft');
var unorederdList = document.querySelector('.list');
var body = document.querySelector('body');
var filtersContainer = document.querySelector('.filters-container');
var item = document.querySelectorAll('.item');
// https://stackoverflow.com/questions/51723962/typescript-nodelistofelement-is-not-an-array-type-or-a-string-type
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
        Array.from(item).forEach(function (item) {
            item.style.color = "hsl(236, 9%, 61%)";
        });
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
    if (item) {
        Array.from(item).forEach(function (item) {
            item.style.color = "hsl(236, 9%, 61%)";
        });
    }
});
var todos = [];
var completedTodos = [];
var activeTodos = [];
var addTodo = function (value) {
    var item = {
        text: value,
        isComplete: false
    };
    if (value) {
        todos.push(item);
        var todo_1 = todos[todos.length - 1];
        var listItem_1 = document.createElement('li');
        listItem_1.classList.add('item');
        list.appendChild(listItem_1);
        var inputElement = document.createElement('input');
        inputElement.classList.add('completeCheckBox');
        inputElement.setAttribute("type", "checkbox");
        listItem_1.appendChild(inputElement);
        listItem_1.appendChild(document.createTextNode(todo_1.text));
        inputElement.addEventListener('change', function () {
            if (!todo_1.isComplete) {
                listItem_1.classList.add('complete');
                todo_1.isComplete = !todo_1.isComplete;
            }
            else if (listItem_1.classList.contains('complete')) {
                listItem_1.classList.remove('complete');
                todo_1.isComplete = !todo_1.isComplete;
            }
        });
    }
};
addinput.addEventListener('click', function () {
    addTodo(input.value);
    itemsLeft.innerText = "".concat(items.length, " items left");
    input.value = "";
});
var items = document.getElementsByClassName('item');
var clearComplete = function (todo) {
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
var showComplete = function () {
    Object.values(items).map(function (item) {
        console.log(item);
        if (item.classList.contains('complete')) {
            console.log('it has complete');
            item.classList.remove('hidden');
            item.classList.add('visible');
        }
        else {
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
var showActive = function () {
    Object.values(items).map(function (item) {
        if (item.classList.contains('complete')) {
            item.classList.remove('visible');
            item.classList.add('hidden');
        }
        else {
            item.classList.remove('hidden');
            item.classList.add('visible');
        }
    });
};
var showAll = function () {
    Object.values(items).map(function (item) {
        item.classList.remove('hidden');
    });
};
var active = document.getElementById('active');
active.addEventListener('click', showActive);
var all = document.getElementById('all');
all.addEventListener('click', showAll);
