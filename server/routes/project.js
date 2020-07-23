const express = require('express')
const router = express.Router()
const connection = require('../connection')

router.get('/', (req, res) => {
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
