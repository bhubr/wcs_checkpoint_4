import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const ModalBack = (props) => {
  return <div className="ModalBack" onClick={() => props.toggleModal(false)} />
}

ModalBack.propTypes = {
  toggleModal: PropTypes.func
}

export default ModalBack
