import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App(){
  
  
  const {todos,setTodos} = useState([])

  useEffect(async()=>{
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json()
    setTodos(data)
  }, [])
  
  return <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
}
