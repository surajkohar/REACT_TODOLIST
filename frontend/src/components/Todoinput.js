import React,{useState} from 'react'

function Todoinput(props){
  const[inputText,setInputText]=useState('');
 

    return(
        <>
    <div className='input-container'>
      <input type='text' value={inputText} placeholder='Enter Your Todo' onChange={e=>{ setInputText(e.target.value)}}/> &nbsp;
      <button className='add-btn'  onClick={()=>{props.addList(inputText)
       setInputText("")}} >+</button>
      <div>{inputText}</div>
    </div>
        </>
    )
}

export default Todoinput