import React, { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

export const Todo = (props) => {
    const [showModal,setShowModal] = useState(false)
    const deleteHandler = ()=>{
        setShowModal(true)
  
    }
    const closeModalHandler = ()=>{
        setShowModal(false)
    }
    return (
        <div>
            
                 <h1>My Todos</h1>
     <div className='card'>
       <h2>{props.text}</h2>
     </div>
     <div className='actions'>
     <button className='btn'  onClick={deleteHandler} >Delete</button>
     </div>
     {
         showModal && <Modal onClick={closeModalHandler} /> 
    
     }
     {
             showModal && <Backdrop onClick={closeModalHandler} />
    
     }
        </div>
    )
}
