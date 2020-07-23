import React from 'react'
import './Modal.scss'

const ModalBack = (props) => {
  return (
    <div className='ModalBack' onClick={() => props.toggleModal(false)} />
  )
}

export default ModalBack
