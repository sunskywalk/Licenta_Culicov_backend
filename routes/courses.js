const express = require('express');
const router = express.Router();

let courses = [
  { courseName: 'Mathematics', professor: 'Dr. Smith', schedule: 'Mon 10:00' },
  { courseName: 'Physics', professor: 'Dr. Johnson', schedule: 'Wed 12:00' }
];

// GET: Получаем список курсов
router.get('/', (req, res) => {
  res.json(courses);
});

// POST: Добавляем новый курс
router.post('/', (req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res.status(201).json({ message: 'Course added successfully', course: newCourse });
});

module.exports = router;
