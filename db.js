const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres123",
    host: "localhost",
    database: "postgres",
    port: 5432
})

module.exports = pool;
