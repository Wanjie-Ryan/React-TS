import React, {useRef} from 'react'
import './styles.css'


interface Props{

    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}

function Inputfield({todo, setTodo, handleAdd}:Props) {

  const inputRef = useRef<HTMLInputElement>(null)

  return (

    <>

        <form className='input' onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur()}}>

            <input type='text' ref={inputRef} placeholder='Enter a task' className='input__box' value ={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className='input__submit' type='submit'>Create</button>





        </form>
    
    
    
    
    </>


  )
}

export default Inputfield