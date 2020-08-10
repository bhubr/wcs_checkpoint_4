const express = require('express')
const router = express.Router()
const connection = require('../connection')

router.get('/', (req, res) => {
  connection.query(
    `SELECT
      project.*,
      img.project_id, ANY_VALUE(img.src) AS src,
      GROUP_CONCAT(criteria.id) AS criteria_ids
    FROM project
    JOIN img ON project.id = img.project_id
    JOIN project_criteria ON project.id = project_criteria.project_id
    JOIN criteria ON project_criteria.criteria_id = criteria.id
    GROUP BY project.id
    ORDER BY project.id DESC`,
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        const projects = results.map((project) => {
          const criteriaIds = project.criteria_ids
            .split(',')
            .map((idStr) => Number(idStr))
          return { ...project, criteria_ids: criteriaIds }
        })
        res.status(201).json(projects)
      }
    }
  )
})

router.post('/', (req, res) => {
  const { src: imgSrc, criteriaIds, ...formData } = req.body
  let projectId
  connection
    .queryAsync('INSERT INTO project SET ?', formData)
    .then((results) => {
      projectId = results.insertId
      const formData2 = { src: imgSrc, project_id: projectId }
      return connection.queryAsync('INSERT INTO img SET ?', formData2)
    })
    .then(() => {
      const sqlProjectCriteria =
        'INSERT INTO project_criteria (project_id,criteria_id)VALUES ?'
      const projectCriteriaValues = criteriaIds.map((criteriaId) => [
        projectId,
        criteriaId
      ])
      return connection.queryAsync(sqlProjectCriteria, [projectCriteriaValues])
    })
    .then((results) => {
      res.status(201).json(results)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
