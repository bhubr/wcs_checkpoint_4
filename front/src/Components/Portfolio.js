import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Project from './Project'
import Modal from './Modal'
import ModalBack from './ModalBack'
import './Project.scss'

function Portfolio() {
  const [modalId, setModalId] = useState(null)

  const [project, setProject] = useState([])
  const [techno, setTechno] = useState([])
  const [criteria, setCriteria] = useState([])
  const [filterCriteriaId, setFilterCriteriaId] = useState(null)

  const openModal = (e) => {
    const projectId = Number(e.target.id)
    setModalId(projectId)
  }

  const filterByCriteria = (e) => {
    const criteriaId = Number(e.target.name)
    setFilterCriteriaId(criteriaId)
  }

  const getPortfolio = () => {
    const url = 'http://localhost:8080/project'
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setProject(data))
  }

  const getTechno = () => {
    const url = 'http://localhost:8080/techno'
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setTechno(data))
  }

  const getCriteria = () => {
    const url = 'http://localhost:8080/criteria'
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCriteria(data))
  }

  const getFilteredProjects = () => {
    return filterCriteriaId === null
      ? project
      : project.filter((proj) => proj.criteria_ids.includes(filterCriteriaId))
  }

  useEffect(() => {
    getPortfolio()
    getTechno()
    getCriteria()
  }, [])

  return (
    <>
      <section id="portfolio">
        <div className="filter_buttons">
          <button className="filter_button" onClick={getPortfolio}>
            See All
          </button>
          {criteria.map((c, i) => (
            <button
              key={c.id.toString()}
              name={c.id}
              className="filter_button"
              onClick={filterByCriteria}
            >
              {c.criteria}
            </button>
          ))}
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="project">
              {getFilteredProjects().map((p) => (
                <Project
                  key={p.id}
                  project={p}
                  techno={techno}
                  openModal={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {modalId && (
        <>
          <Modal
            project={project.find((p) => p.project_id === modalId)}
            techno={techno.filter((t) => t.project_id === modalId)}
            toggleModal={() => setModalId(null)}
          />
          <ModalBack toggleModal={() => setModalId(null)} />
        </>
      )}
    </>
  )
}
export default Portfolio
