import React from 'react'

const Modal = (props) => {
    const cancelHandler = ()=>{
        props.onClick()
        
    }
    const confirmHandler = ()=>{
        props.onClick()

    }
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal
