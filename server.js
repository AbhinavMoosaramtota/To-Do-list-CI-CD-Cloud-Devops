
const express = require('express');
const app = express();

let tasks = [];

app.use(express.json());
app.use(express.static('.'));

app.post('/add', (req, res) => {
  const { task } = req.body || {};
  if(task && task.trim()) tasks.push(task.trim());
  res.json({ tasks });
});

app.get('/tasks', (_req, res) => res.json(tasks));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
