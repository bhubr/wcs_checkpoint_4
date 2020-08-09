import React from 'react'
import PropTypes from 'prop-types'
import projectPropTypes from '../PropTypes/project'

function Project({ project, openModal }) {
  const url = `images/${project.src}`
  return (
    <div
      className="project_post"
      id={project.project_id}
      onClick={(e) => openModal(e)}
    >
      <div
        className="header_post"
        id={project.project_id}
        onClick={(e) => openModal(e)}
      >
        <img
          src={url}
          alt=""
          id={project.project_id}
          onClick={(e) => openModal(e)}
        />
      </div>
      <div
        className="body_post"
        id={project.project_id}
        onClick={(e) => openModal(e)}
      >
        <h1 id={project.project_id} onClick={(e) => openModal(e)}>
          {project.title}
        </h1>
      </div>
    </div>
  )
}

Project.propTypes = {
  project: projectPropTypes,
  openModal: PropTypes.func
}

export default Project
