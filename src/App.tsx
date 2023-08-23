import React, {useState} from 'react'
import './App.css'
import InputComponent from './components/inputfield'
import {Todo} from './components/model'

function App (){

  const [todo, setTodo ] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  // console.log(todos)

  const handleAdd = (e:React.FormEvent )=>{

    e.preventDefault()

    if(todo){

      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}])
      setTodo('')
    }

  }

  return(

    <>

      <div className='app'>

        <span className="heading">Wanjiefy</span>

        <InputComponent todo={todo} setTodo={setTodo} handleAdd ={handleAdd}/>

        {todos.map((item)=>(
          <>
            <p>{item.id}</p>
            <p>{item.todo}</p>
            <p>{item.isDone}</p>
          </>

        ))}

      </div>
    
    
    </>


  )
}

export default App