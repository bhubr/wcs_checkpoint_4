import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Project from './Project'
import Modal from './Modal'
import ModalBack from './ModalBack'
import './Project.scss'

function Portfolio() {
  const [showModal, toggleModal] = useState(false)
  const [modalId, setModalId] = useState()

  const [project, setProject] = useState([])
  const [techno, setTechno] = useState([])

  // const projectContext = React.createContext(project)
  // const technoContext = React.createContext(techno)

  const openModal = (e) => {
    console.log(e.target.id)
    toggleModal(true)
    setModalId(e.target.id)
  }

  const getPortfolio = () => {
    const url = 'http://localhost:8080/project'
    axios
      .get(url)
      .then(res => res.data)
      .then(data => setProject(data))
  }

  const getTechno = () => {
    const url = 'http://localhost:8080/techno'
    axios
      .get(url)
      .then(res => res.data)
      .then(data => setTechno(data))
  }

  useEffect(() => {
    getPortfolio()
    getTechno()
  }, [])

  return (
    <>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="project">
              {project.map(p =>
                <Project key={p.id} project={p} techno={techno} openModal={openModal} />
              )}
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <>
          <Modal
            project={project.filter(p => p.project_id == modalId)}
            techno={techno.filter(t => t.project_id == modalId)}
            toggleModal={toggleModal}
          />
          <ModalBack toggleModal={toggleModal} />
        </>
      )}
    </>
  )
}
export default Portfolio
