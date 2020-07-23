const express = require('express')
const router = express.Router()

const { connection } = require('../connection')




//see all tracks and filter by title or artist
router.get('/tracks', (req, res) => {
  if (req.query.title & req.query.artist) {
    const sql = `SELECT * FROM track WHERE title = ${req.query.title} AND artist = ${req.query.artist};`
  } else if (req.query.title) {
    const sql = `SELECT * FROM track WHERE title = ${req.query.title};`
  } else if (req.query.artist) {
    const sql = `SELECT * FROM track WHERE artist = ${req.query.artist};`
  } else if (req.query.search) {
    const sql = `SELECT * FROM track WHERE title LIKE '%${req.query.search}%' OR artist LIKE '%${req.query.search}%';`
  } else {
    const sql = `SELECT * FROM track;`
  }
  connection.query(
    sql,
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.status(200).json(results)
      }
    })
})

//see all tracks in a playlist
router.get('/:id/tracks', (req, res) => {
  const playlistId = req.params.id
  connection.query(
    'SELECT * FROM track WHERE playlist_id = ?;',
    playlistId,
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message })
      } else {
        res.status(200).json(results)
      }
    })
})

//create a track in a playlist
router.post('/:id/tracks', (req, res) => {
  const playlistId = req.params.id
  const formData = req.body
  connection.query(
    'INSERT INTO track (playlist_id, title, artist, album_picture, youtube_url) VALUES (?,?,?,?,?);',
    [playlistId, ...Object.values(formData)],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.sqlMessage })
      } else {
        res.status(201).json({ playlist_id: playlistId, ...formData })
        //const sql = 'select * from track where id = ?'
        // connection.query(sql, result.insertId, (err, result) => {
          // if (err) {
          //   res.status(500).json({ error: err.sqlMessage }) //'An error occurred' :${err.message}
          // } else {
          //   res.status(201).json(results)
        // })
      }
    })
})

//delete a track 
router.delete('/:id/tracks/:trackId', (req, res) => {
  const playlistId = req.params.id
  const trackId = req.params.trackId
  connection.query(
    'DELETE FROM track WHERE id = ? AND playlist_id = ?',
    [trackId, playlistId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Failed to delete a track');
      } else {
        res.status(200).send(results.affectedRows + ' deleted!');
      }
    });
});

//modify a track
router.put('/:id/tracks/:trackId', (req, res) => {
  const playlistId = req.params.id
  const trackId = req.params.trackId
  const formData = req.body
  connection.query(
    'UPDATE track SET playlist_id = ?, title = ?, artist = ?, album_picture = ?, youtube_url = ? WHERE id= ?;',
    [playlistId, ...Object.values(formData), trackId],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.sqlMessage })
      } else {
        res.status(200).json({ id: trackId, playlist_id: playlistId, ...formData })
      }
    })
})


module.exports = router
