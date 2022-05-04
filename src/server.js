const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = require('./config');

const app = express();

// Global Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// route imports
const { petsRoutes } = require('./routes/petsRoutes');

// routes
app.use('/api/pets', petsRoutes);

app.get('/', (req, res) => {
  res.json('Hello person');
});

// 404 error
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, () => console.log('Server running on port', PORT));
