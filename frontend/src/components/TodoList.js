import React from 'react'

const Todolist=(props)=>{


    return (
        <>
       <li className="li-item">
          {props.item}
        &nbsp; &nbsp;<span className='icons'>
        <i class="fa-solid fa-trash-can" onClick={(e)=>{props.deleteItem(props.index)}}></i>
        </span>
       </li>
        </>
    )
}
export default Todolist;