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
  const [criteria, setCriteria] = useState([])

  const openModal = (e) => {
    toggleModal(true)
    setModalId(e.target.id)
  }

  const filterByCriteria = (e) => {
    setProject([])
    const id = e.target.name
    const url = `http://localhost:8080/criteria/${id}`
    axios
      .get(url)
      .then(res => res.data)
      .then(data => setProject(data))
      .then(console.log(project))
  }

  const getPortfolio = () => {
    setProject([])
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

  const getCriteria = () => {
    const url = 'http://localhost:8080/criteria'
    axios
      .get(url)
      .then(res => res.data)
      .then(data => setCriteria(data))
  }

  useEffect(() => {
    getPortfolio()
    getTechno()
    getCriteria()
  }, [])

  return (
    <>
      <section id="portfolio">
        <div className='filter_buttons'>
          <button className='filter_button' onClick={getPortfolio}>See All</button>
          {criteria.map((c, i) =>
            <button key={c.id.toString()} name={c.id} className='filter_button' onClick={e => filterByCriteria(e)}>{c.criteria}</button>
          )}
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
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
            project={project.filter(p => p.project_id === parseInt(modalId))}
            techno={techno.filter(t => t.project_id === parseInt(modalId))}
            toggleModal={toggleModal}
          />
          <ModalBack toggleModal={toggleModal} />
        </>
      )}
    </>
  )
}
export default Portfolio
