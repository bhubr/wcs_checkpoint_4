const express = require('express')
const { port } = require('./config')
const routes = require('./routes')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/project', routes.project)
app.use('/techno', routes.techno)
app.use('/criteria', routes.criteria)
app.use('/admin', routes.admin)

app.get('/', (req, res) => {
  res.send({ message: 'YESS successfully connected!' })
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
