class Todo{
    constructor(task, completed = false){
        this.task = task
        this.completed = completed
        this.date = (new Date().getMonth()+1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()
    } 
    
    completedTask(){
        this.completed = !this.completed
        return this.completed
    }

    taskDate(){
        return this.date 
    }
}

class Compile{
    constructor(){
        this.myTodoList = []
    }

    addToList(userInput){
        var splitString = userInput.split(", ")
        const listIterate = (arr) => {
            if (arr.length > 0){
                this.myTodoList.push(new Todo(arr[0]))
                arr.splice(0, 1)
                return listIterate(arr)
            }
            return("The item was added to your list.")
        }
        return listIterate(splitString)
    }

    removeFirst(){
        const firstItem = this.myTodoList.shift()
        return(`${firstItem.task} was removed successfully.`)
    }

    removeLast(){
        const lastItem = this.myTodoList.pop()
        return(`${lastItem.task} was removed successfully.`)
    }

    removeSpecific(removeTask){
        const specificIndex = this.myTodoList.findIndex(e => e.task === removeTask)
        if (specificIndex === -1){
            return(`Your search ${removeTask} did not match.`)
        }

        this.myTodoList.splice(specificIndex, 1)
        return(`${removeTask} was removed successfully.`)
    }

    listComplete(completeTask){
        const theTask = this.myTodoList.findIndex(e => e.task === completeTask)
        if(theTask === -1){
            return("That item was not found.")
        }
        
        return this.myTodoList[theTask].completedTask()
    }

    getList(){
        return(this.myTodoList)
    }
}

module.exports = Compile
// const myList = new Compile()
// console.log(myList.addToList("go fishing, take the dogs to the park, farm on my farm, smoke hella weed"))
// console.log(myList.removeSpecific("farm on my farm"))
// console.log(myList.listComplete("take the dogs to the park"))
// console.log(myList.getList())

