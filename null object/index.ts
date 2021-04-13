import db from './db';
var connection = db.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '설치시 설정한 비밀번호',
  database : '생성한 DB명'
});

connection.connect();

// if(connection) {
//     connection.connect();
// }

// connection?.connect();