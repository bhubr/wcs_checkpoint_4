import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import './admin.scss'

function ModalAdmin(props) {
  const initValue = {
    title: '',
    create_date: '',
    description: '',
    site_link: '',
    github_link: '',
    company_name: ''
  }
  const [newProject, setNewProject] = useState(initValue)
  const [newImg, setNewImg] = useState('')

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    })
  }

  const handleImgChange = (e) => {
    setNewImg(e.target.value)
  }

  const addNewProject = (e) => {
    e.preventDefault()
    const urlProject = '/project'
    const payload = {
      ...newProject,
      src: newImg
    }
    axios.post(urlProject, payload).then(() => props.toggleModal(false))
  }

  return (
    <div className="modal_admin">
      <div className="modal_admin_title">
        <h1>Add a new project</h1>
      </div>
      <form onSubmit={addNewProject}>
        <div className="input">
          <label>Project title</label>
          <input
            name="title"
            className="form-field animation"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="input">
          <label>Project description</label>
          <textarea
            name="description"
            className="form-field animation"
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="input">
          <label>Created date</label>
          <input
            name="create_date"
            type="date"
            className="form-field animation"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="input">
          <label>Site link</label>
          <input
            name="site_link"
            className="form-field animation"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input">
          <label>Github link</label>
          <input
            name="github_link"
            className="form-field animation"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input">
          <label>Image src</label>
          <input
            name="src"
            placeholder="File name in /public/images"
            className="form-field animation"
            onChange={handleImgChange}
            required
          ></input>
        </div>
        <div className="input">
          <label>Company Name</label>
          <input
            name="company_name"
            className="form-field animation"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

ModalAdmin.propTypes = {
  toggleModal: PropTypes.func
}

export default ModalAdmin
