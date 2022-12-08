const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'food',
    password: 'foodworld',
    database: 'foodworld'
})

/*const value = pool.query("select NOW();")
*/

module.exports = pool
