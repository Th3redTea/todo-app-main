const input = document.getElementById('addTask')
const addinput = document.querySelector('.addCheckBox')
const list = document.getElementById('list')
const clear = document.getElementById('clear')
const itemsLeft = document.getElementById('itemsLeft')

const unorederdList = document.querySelector('.list')
const body = document.querySelector('body')
const filtersContainer = document.querySelector('.filters-container')
const item = document.querySelectorAll('.item')
const lightPic = document.querySelector('.light-mode')
const darkPic = document.querySelector('.dark-mode')

const sunIcon = document.getElementById('sunIcon')
const moonIcon = document.getElementById('moonIcon')


sunIcon.addEventListener('click', () => {

    lightPic.style.visibility = "visible"
    darkPic.style.visibility = "hidden"


    moonIcon.style.visibility = "visible"
    sunIcon.style.visibility = "hidden"

    input.style.backgroundColor = "white"
    input.style.color = "hsl(235, 19%, 35%)"


    unorederdList.style.backgroundColor = "white"

    
    body.style.backgroundColor = "white"
    
    filtersContainer.style.backgroundColor = "white"
    filtersContainer.style.color = "hsl(236, 9%, 61%)" 
    
    if(item){
        item.style.color = "hsl(236, 9%, 61%)" 
    }

})

moonIcon.addEventListener('click', () => {

    lightPic.style.visibility = "hidden"
    darkPic.style.visibility = "visible"


    moonIcon.style.visibility = "hidden"
    sunIcon.style.visibility = "visible"

    input.style.backgroundColor = "hsl(235, 24%, 19%)"
    input.style.color = "hsl(234, 39%, 85%)"


    const unorederdList = document.querySelector('.list')
    unorederdList.style.backgroundColor = "hsl(235, 24%, 19%)"

    
    const body = document.querySelector('body')
    body.style.backgroundColor = "hsl(235, 21%, 11%)"
    
    const filtersContainer = document.querySelector('.filters-container')
    filtersContainer.style.backgroundColor = "hsl(235, 24%, 19%)"
    filtersContainer.style.color = "hsl(234, 39%, 85%)" 
    
    const item = document.querySelectorAll('.item')
    item.style.color = "hsl(236, 33%, 92%)" 
})





const todos = []
const completedTodos = []
const activeTodos = []

const addTodo = (value) => {
    const item = {
        text: value,
        isComplete: false,
    }
    
    if(value){

        todos.push(item)

        let todo = todos[todos.length - 1]

        let listItem = document.createElement('li')
        
        listItem.classList.add('item')
        list.appendChild(listItem)

        let inputElement = document.createElement('input')
        inputElement.classList.add('completeCheckBox')
        inputElement.setAttribute("type", "checkbox")

        listItem.appendChild(inputElement)
        listItem.appendChild(document.createTextNode(todo.text))

        inputElement.addEventListener('change', () => {
                
            if(!todo.isComplete){
                    listItem.classList.add('complete')
                    todo.isComplete = !todo.isComplete

            } else if(listItem.classList.contains('complete')){
                    listItem.classList.remove('complete')
                    todo.isComplete = !todo.isComplete
            }
        })
         
        
    }
    
    
}


addinput.addEventListener('click', () => {
    addTodo(input.value)
    itemsLeft.innerHTML = `${items.length} items left`
    input.value = ""     
})

const items = document.getElementsByClassName('item')



const clearComplete = (todo) => {
    
    
    Object.values(items).map(item => {
        if(item.textContent === todo.text && todo.isComplete){
            item.remove()
 
            let idx = todos.indexOf(todo)

            if (idx !== -1) {
                    todos.splice(idx, 1)
            }
        }
    })    

}


const showComplete = () => {
    
    Object.values(items).map(item => {
        console.log(item)

        if(item.classList.contains('complete')){
            console.log('it has complete')
            item.classList.remove('hidden')
            item.classList.add('visible')
        } else {
            item.classList.remove('visible')
            item.classList.add('hidden')
        }   
    })    

}

clear.addEventListener('click', () =>{


    todos.forEach(todo => {
        clearComplete(todo)
    });

})


const completed = document.getElementById('completed')

completed.addEventListener('click', showComplete)


const showActive = () => {
    
    
    Object.values(items).map(item => {
        if(item.classList.contains('complete')){
            item.classList.remove('visible')
            item.classList.add('hidden')
            
        } else {
            item.classList.remove('hidden')
            item.classList.add('visible')
        }
    })    

}


const showAll = () => {

    Object.values(items).map(item => {
            item.classList.remove('hidden')

    })
}    


const active = document.getElementById('active')

active.addEventListener('click', showActive)


const all = document.getElementById('all');

all.addEventListener('click', showAll)

