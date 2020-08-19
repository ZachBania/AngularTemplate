
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'zrbania_root',
  password: 'password',
  database: 'zrbania_AngularTemplate'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
