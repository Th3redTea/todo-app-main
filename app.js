const input = document.getElementById('addTask')
const addinput = document.querySelector('.addCheckBox')
const list = document.getElementById('list')

const todos = []

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
    input.value = ""     
})



const clear = document.getElementById('clear')

clear.addEventListener('click', () =>{
    todos.filter(todo => {
        if(todo.isComplete){
            let idx = todos.indexOf(todo)
            if (idx !== -1) {
                todos.splice(idx, 1)
            }
        }
    })
})
