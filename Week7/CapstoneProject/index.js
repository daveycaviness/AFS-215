require('./todo.css')
require('/Todo.js')

const listTest = newList();
const addToList = () =>{
    const userInput = document.querySelector('task').value;
    if (userInput.length > 0){
        listTest.push(userInput);
    }
}

const removeFirst = () =>{
    listTest.shift()
    
}