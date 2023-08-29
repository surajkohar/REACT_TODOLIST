import React,{useState} from 'react'
import './App.css'
import Todoinput from './components/Todoinput';
import Todolist from './components/TodoList';
const App=()=>{

  const[listTodo,setListTodo]=useState([]);

  let addList=(inputText)=>{
    if(inputText!=''){
   setListTodo([...listTodo,inputText])
  }}

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo(newListTodo)
  }
  
  return(
    <>
      <div className='main-container'>
      <div className='center-container'>
        Add your list here
        <Todoinput addList={addList}/>
        <h1 className='app-heading'> TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <Todolist key={i} item={listItem} index={i} deleteItem={deleteListItem}/>
          )
        })}
       
      </div> 
      </div>
    </>
  )
}


export default App;

