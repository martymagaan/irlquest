const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const app = express();

fs.readFile('./auth.json', (err, data) => {

  const auth = JSON.parse(data);

  const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: auth.user,
    password: auth.pass,
    database: auth.db
  });

  function addUser(email, pwHash) {
    let sql = 'INSERT INTO users (email, pw_hash) VALUES (?, ?)';
    const inserts = [email, pwHash];
    sql = mysql.format(sql, inserts);
    pool.query(sql, (err) => {
      if (err) throw err;
      console.log('User created:', email);
    }
  }

});
