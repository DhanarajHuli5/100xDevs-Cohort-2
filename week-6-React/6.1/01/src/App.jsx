import { useState } from "react"


function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"go to gym",
    description: "go to gym today"
  },{
    id:2,
    title:"eat food",
    description: "go to hotel today"
  },{
    id:3,
    title:"go to class",
    description: "go to class today"
  }])
  
  function addTodo(){
    setTodos([...todos,{
      id:4,
      title: Math.random(),
      description: Math.random()
    }])
  }
  
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}


function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
