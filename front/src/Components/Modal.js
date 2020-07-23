import React from 'react'
import './Modal.scss'

function Modal(props) {
  const [project] = props.project
  const url = `images/${project.src}`
  const date = project.create_date.slice(0, 7)

  return (
    <div className='modal'>
      <div className='modal_title'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      <div className='modal_img'>
        <img src={url} alt="" />
      </div>

      <div className='modal_body'>
        <div className="modal_info">
          <span>Created</span>
          {date} {project.company_name && `@ ${project.company_name}`}
        </div>
        <div className="modal_info">
          <span>techno</span>
          <div className="tags">
            <ul>
              {props.techno.map(t =>
                <li>{t.techno}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className='modal_img'>
        {project.github_link &&
          <button className='modal_button'>
            <a href={project.github_link}>
              Github 
              <i className="fab fa-github"></i>
            </a>
          </button>
        }
        {project.site_link &&
          <button className='modal_button'>
            <a href={project.site_link}>
              Go to site
          </a>
          </button>
        }
        {/* <button onClick={() => props.toggleModal(false)} className='modal_button'>confirm</button> */}
      </div >
    </div>
  )
}

export default Modal
