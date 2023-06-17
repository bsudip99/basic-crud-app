const express = require('express');
const userController = require('./controllers/userController');

// Set up the Express application
const app = express();
app.use(express.json());


// Define the routes
app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
