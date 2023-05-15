const express = require('express');
const app = express();
const User = require('./user');

// Define a route that fetches all users from the database

app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'email'],
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  });
  

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
