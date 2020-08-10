import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Select from 'react-select-me'

import 'react-select-me/lib/ReactSelectMe.css'
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
  const [allCriteria, setAllCriteria] = useState([])
  const [selectedCriteria, setSelectedCriteria] = useState([])

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    })
  }

  const handleImgChange = (e) => {
    setNewImg(e.target.value)
  }

  const handleCriteriaChange = (values) => {
    setSelectedCriteria(values)
  }

  const addNewProject = (e) => {
    e.preventDefault()
    const urlProject = '/project'
    const payload = {
      ...newProject,
      src: newImg,
      criteriaIds: selectedCriteria.map(({ value }) => value)
    }
    axios.post(urlProject, payload).then(() => props.toggleModal(false))
  }

  const getCriteria = () => {
    const url = '/criteria'
    axios
      .get(url)
      .then((res) =>
        res.data.map(({ id, criteria }) => ({
          value: id,
          label: criteria
        }))
      )
      .then((data) => setAllCriteria(data))
  }

  useEffect(() => {
    getCriteria()
  }, [])

  return (
    <div className="modal_admin">
      <div className="modal_scroll">
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
            />
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
            />
          </div>
          <div className="input">
            <label>Site link</label>
            <input
              name="site_link"
              className="form-field animation"
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <label>Github link</label>
            <input
              name="github_link"
              className="form-field animation"
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <label>Image src</label>
            <input
              name="src"
              placeholder="File name in /public/images"
              className="form-field animation"
              onChange={handleImgChange}
              required
            />
          </div>
          <div className="input">
            <label>Company Name</label>
            <input
              name="company_name"
              className="form-field animation"
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <label>Criteria</label>
            <Select
              options={allCriteria}
              value={selectedCriteria}
              onChange={handleCriteriaChange}
              multiple
            />
          </div>
          <div className="center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

ModalAdmin.propTypes = {
  toggleModal: PropTypes.func
}

export default ModalAdmin
