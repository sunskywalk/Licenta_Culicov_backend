const express = require('express');
const app = express();
const cors = require('cors');
const coursesRoutes = require('./routes/courses'); // Подключение маршрутов

app.use(cors());
app.use(express.json());

// Подключаем маршруты курсов
app.use('/courses', coursesRoutes);

// Базовый маршрут
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
