const Compile = require("../Todo.js")
const expect = require("chai").expect

beforeEach(() =>{
    todo = new Compile();
    todo.addToList("Fly My kite");
    console.log(todo.myTodoList)
    
})
it('failing test', ()=> {
    expect(todo.myTodoList[0].task).to.equal("Yodaleheehoo")
})

it('push todo complete', () => {
    expect(todo.addToList('Fly my fucking Eagle.')).to.equal(('The item was added to your list.'));
})

it('remove first item', () =>{
    expect(todo.removeFirst("Fly My kite")).to.equal('Fly My kite was removed successfully.')
})

it('remove last item', () =>{
    expect(todo.removeLast("Fly My kite")).to.equal('Fly My kite was removed successfully.')
})

it('remove specific item', () =>{
    expect(todo.removeSpecific("Fly My kite")).to.equal('Fly My kite was removed successfully.')
})

it('item not found', () =>{
    expect(todo.removeSpecific("ly My kite")).to.equal('Your search ly My kite did not match.')
})

it('get my list', () =>{
    expect(todo.getList()).to.deep.equal([
        {
          task: 'Fly My kite',
          completed: false,
          date: '10/26/2022'
        }
      ])
})

it ('task complete', () =>{
    expect(todo.myTodoList[0].completedTask()).to.equal(true)
})

it ('task date', () =>{
    expect(todo.myTodoList[0].taskDate()).to.equal(`${new Date().getMonth()+1 + "/" + new Date().getDate() + "/" + new Date().getFullYear()}`)
})