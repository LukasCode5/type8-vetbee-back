const router = require('express').Router();
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

router.get('/createtable', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    // eslint-disable-next-line operator-linebreak
    const query = 'SELECT * FROM pets';
    const [data] = await conn.query(query);
    res.status(200).json(data);
    await conn.end();
  } catch (err) {
    console.log('createtable route error', err);
    res.status(500).json('something went wrong');
  }
});

router.get('/insertInto', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    // eslint-disable-next-line operator-linebreak
    const query =
      'INSERT INTO pets(name, dob, client_email, archived) VALUES("Petras", "Petriukas", "petras@petriukas.lt", 0)';
    const [data] = await conn.query(query);
    res.status(200).json(data);
    await conn.end();
  } catch (err) {
    console.log('createtable route error', err);
    res.status(500).json('something went wrong');
  }
});

module.exports = { petsRoutes: router };
