const express = require('express')
const router = express.Router()
const connection = require('../connection')

router.get('/', (req, res) => {
  connection.query(
    `SELECT techno.id, project_id, techno FROM project
    JOIN project_techno ON project.id = project_techno.project_id
    JOIN techno ON project_techno.techno_id = techno.id`,
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.status(201).json(results)
      }
    }
  )
})

module.exports = router
