import React from 'react'


let name:string
let age:number
let hobbies:string[] 
let role:[number, string]  //the role is a TUPLE and it will hold both a number and a string in one array 

name = 'Ricky Marshall'
age = 23

type person ={

  id:number,
  firstName?:string
}

let Person:person ={

  id:1,
  // firstName:'Ricky',
}

let results:string | number //this is union, and the the variable results can hold data of type string and data of type number

results = 3


function App() {
  return (
    <div>App</div>
  )
}

export default App