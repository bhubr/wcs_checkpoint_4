const mysql = require('mysql')
const { promisify } = require('util')
const { db } = require('./config')

const pool = mysql.createPool(db)

pool.queryAsync = promisify(pool.query.bind(pool))

module.exports = pool
