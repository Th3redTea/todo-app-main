const input = document.getElementById('addTask')
const addinput = document.querySelector('.addCheckBox')
const list = document.getElementById('list')
const items = document.getElementsByClassName('item')
const clear = document.getElementById('clear')

console.log(items)

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

clear.addEventListener('click', () =>{


    todos.forEach(todo => {
        clearComplete(todo)
        console.log(todos)
    });

})
