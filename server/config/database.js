const mysql = require("mysql2");

// // my local database connection
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.MYSQL_DB,
//   connectionLimit: 10,
// });


// Alternatively, if using planetScale
// const pool = mysql.createConnection(process.env.DATABASE_URL);
const pool = mysql.createConnection(process.env.DATABASE_URL)

// console.log("Connected to the database");

// Create registration table
const createRegistrationTable = `CREATE TABLE IF NOT EXISTS registration (
  user_id int auto_increment,
  user_name varchar(255) not null,
  user_email varchar(255) not null,
  user_password varchar(255) not null,
  PRIMARY KEY (user_id)
)`;

pool.query(createRegistrationTable, (err, results) => {
  if (err) throw err;
  console.log("Registration table created");
});

// Create profile table
const createProfileTable = `CREATE TABLE IF NOT EXISTS profile (
  user_profile_id int auto_increment,
  user_id int not null,
  first_name varchar(255) not null,
  last_name varchar(255) not null,        
  PRIMARY KEY (user_profile_id)
)`;

pool.query(createProfileTable, (err, results) => {
  if (err) throw err;
  console.log("Profile table created");
});

// Create question table
const createQuestionTable = `CREATE TABLE IF NOT EXISTS question (
  question_id int auto_increment,
  question varchar(255) not null,
  question_description varchar(255),
  question_code_block varchar(255),
  tags varchar(255),
  post_id varchar(255) not null,
  user_id int not null,
  PRIMARY KEY (question_id),
  UNIQUE KEY (post_id)
)`;

pool.query(createQuestionTable, (err, results) => {
  if (err) throw err;
  console.log("Question table created");
});

// Create answer table
const createAnswerTable = `CREATE TABLE IF NOT EXISTS answer (
  answer_id int auto_increment,
  answer varchar(255) not null,
  answer_code_block varchar(255),
  user_id int not null,
  question_id int not null,
  PRIMARY KEY (answer_id)
)`;

pool.query(createAnswerTable, (err, results) => {
  if (err) throw err;
  console.log("Answer table created");
});

module.exports = pool;
