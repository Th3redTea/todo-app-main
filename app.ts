const input = document.getElementById('addTask') as HTMLInputElement;
const addinput = document.querySelector('.addCheckBox') as HTMLInputElement;
const list = document.getElementById('list') as HTMLMapElement;
const clear = document.getElementById('clear') as HTMLButtonElement;
const itemsLeft = document.getElementById('itemsLeft') as HTMLElement;

const unorederdList = document.querySelector('.list') as  HTMLUListElement;
const body = document.querySelector('body') as HTMLElement;
const filtersContainer = document.querySelector('.filters-container') as HTMLElement;
const item = document.querySelectorAll('.item') as NodeListOf<HTMLElement>;
// https://stackoverflow.com/questions/51723962/typescript-nodelistofelement-is-not-an-array-type-or-a-string-type
const lightPic = document.querySelector('.light-mode') as HTMLElement;
const darkPic = document.querySelector('.dark-mode') as HTMLElement;

const sunIcon = document.getElementById('sunIcon') as HTMLElement;
const moonIcon = document.getElementById('moonIcon') as HTMLElement;


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
        Array.from(item).forEach((item) => {
            item.style.color = "hsl(236, 9%, 61%)" 
        })
    }

})

moonIcon.addEventListener('click', () => {

    lightPic.style.visibility = "hidden"
    darkPic.style.visibility = "visible"


    moonIcon.style.visibility = "hidden"
    sunIcon.style.visibility = "visible"

    input.style.backgroundColor = "hsl(235, 24%, 19%)"
    input.style.color = "hsl(234, 39%, 85%)"


    const unorederdList = document.querySelector('.list') as HTMLElement;
    unorederdList.style.backgroundColor = "hsl(235, 24%, 19%)"

    
    const body = document.querySelector('body') as HTMLElement;
    body.style.backgroundColor = "hsl(235, 21%, 11%)"
    
    const filtersContainer = document.querySelector('.filters-container') as HTMLElement;
    filtersContainer.style.backgroundColor = "hsl(235, 24%, 19%)"
    filtersContainer.style.color = "hsl(234, 39%, 85%)" 
    
    const item = document.querySelectorAll('.item') as NodeListOf<HTMLElement>
    if(item){
        Array.from(item).forEach((item) => {
            item.style.color = "hsl(236, 9%, 61%)" 
        })
    }

})



interface Todo {
    text: string,
    isComplete: boolean,
}

const todos: Todo[] = []
const completedTodos: Todo[] = []
const activeTodos: Todo[] = []

const addTodo = (value: string) => {
    const item: { text: string; isComplete: boolean } = {
        text: value,
        isComplete: false,
    }
    
    if(value){

        todos.push(item)

        let todo = todos[todos.length - 1]

        let listItem: HTMLLIElement = document.createElement('li')
        
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
    itemsLeft.innerText = `${items.length} items left`
    input.value = ""     
})

const items = document.getElementsByClassName('item')



const clearComplete = (todo: any) => {
    
    
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


const completed = document.getElementById('completed') as HTMLElement;

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


const active = document.getElementById('active') as HTMLElement;

active.addEventListener('click', showActive)


const all = document.getElementById('all') as HTMLElement;

all.addEventListener('click', showAll)

