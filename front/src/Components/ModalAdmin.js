import React, { useState } from 'react'
import axios from 'axios'
import './admin.scss'

function ModalAdmin(props) {
  const initValue = {
    'title': '',
    'create_date': '',
    'description': '',
    'site_link': '',
    'github_link': '',
    'company_name': ''
  }
  const [newProject, setNewProject] = useState(initValue)

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject, [e.target.name]: e.target.value
    })
  }

  const addNewProject = (e) => {
    e.preventDefault()
    const url = 'http://localhost:8080/project'
    axios.post(url, newProject)
    .then(() => props.toggleModal(false) )
  }

  return (
    <div className='modal_admin'>
      <div className='modal_admin_title'>
        <h1>Add a new project</h1>
      </div>
      <form onSubmit={addNewProject}>
        <div className='input'>
          <label>Project title</label>
          <input name='title' className='form-field animation' onChange={handleInputChange} required></input>
        </div>
        <div className='input'>
          <label>Project description</label>
          <textarea name='description' className='form-field animation' onChange={handleInputChange} required></textarea>
        </div>
        <div className='input'>
          <label>Created date</label>
          <input name='create_date' type='date' className='form-field animation' onChange={handleInputChange} required></input>
        </div>
        <div className='input'>
          <label>Site link</label>
          <input name='site_link' className='form-field animation' onChange={handleInputChange} required></input>
        </div>
        <div className='input'>
          <label>Github link</label>
          <input name='github_link' className='form-field animation' onChange={handleInputChange} required></input>
        </div>
        <div className='input'>
          <label>Company Name</label>
          <input name='company_name' className='form-field animation' onChange={handleInputChange} required></input>
        </div>
        <div className='center'>
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* <button onClick={() => props.toggleModal(false)} className='modal_admin_button'>confirm</button> */}
    </div>
  )
}

export default ModalAdmin
