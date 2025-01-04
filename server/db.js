const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    database:'perntodo'
})

module.exports = pool;