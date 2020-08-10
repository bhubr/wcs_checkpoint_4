import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalAdmin from './ModalAdmin'
import ModalBack from './ModalBack'
import './admin.scss'

function Admin() {
  const [showModal, toggleModal] = useState(false)
  const openModal = () => {
    toggleModal(true)
  }

  return (
    <div className="admin">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li>
            <Link className="smoothscroll" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="smoothscroll" to="/#about">
              About
            </Link>
          </li>
          <li>
            <Link className="smoothscroll" to="/#portfolio">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={openModal}>Add a project</button>
      {showModal && (
        <>
          <ModalAdmin toggleModal={toggleModal} />
          <ModalBack toggleModal={toggleModal} />
        </>
      )}
    </div>
  )
}

export default Admin
