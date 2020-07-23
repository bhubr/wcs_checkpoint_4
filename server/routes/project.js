const express = require('express')
const router = express.Router()
const connection = require('../connection')

// JOIN project_techno ON project.id = project_techno.project_id 
// JOIN techno ON project_techno.techno_id = techno.id
// JOIN project_criteria ON project.id = project_criteria.project_id 
// JOIN criteria ON project_criteria.criteria_id = criteria.id


//get all projects & search by query
router.get('/', (req, res) => {
  const criteria = req.query.criteria
  // if (req.query.criteria) {
  //   const sql = `SELECT * FROM project 
  //   JOIN project_criteria ON project.id = project_criteria.project_id 
  //   JOIN criteria ON project_criteria.criteria_id = criteria.id 
  //   WHERE criteria.name = ?`
  // } 

  connection.query(
    `SELECT * FROM project JOIN img ON project.id = img.project_id
    ORDER BY project.id DESC`, 
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.sqlMessage })
      } else {
        // const res2 = results.map(p => {
          // let toto = Object.assign({ technos: null }, p)
          // connection.query(
          //   `SELECT * FROM project_techno where project_id = ${p.id}`,
          //   (err2, results2) => {
          //     if (err2) {
          //       res.status(500).json({ error: err2.sqlMessage })
          //     } else {
          //       toto.technos = results2
          //       console.log(results2)
          //       return toto
          //     }
          //   })
          // return toto
        // })
        res.status(201).json(results)
      }
    })
})

module.exports = router
