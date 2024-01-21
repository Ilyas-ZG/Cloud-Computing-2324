const express = require('express');
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());


app.use('/cars', carRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server; 
