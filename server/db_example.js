const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'xxx',
  password: 'xxx',
  host: 'xxx',
  port: xxx,
  database: 'xxx',
});

module.exports = pool;
