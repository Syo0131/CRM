const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend en Node.js!' });
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});
