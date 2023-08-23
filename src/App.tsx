import React, {useState} from 'react'
import './App.css'
import InputComponent from './components/inputfield'
import {Todo} from './components/model'

function App (){

  const [todo, setTodo ] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  // console.log(todo)

  const handleAdd = (e:React.FormEvent )=>{

    e.preventDefault()

    if(todo){

      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}])
    }

  }

  return(

    <>

      <div className='app'>

        <span className="heading">Wanjiefy</span>

        <InputComponent todo={todo} setTodo={setTodo} handleAdd ={handleAdd}/>

      </div>
    
    
    </>


  )
}

export default App