const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 3',
    'Projeto 2',
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 3',
    'Projeto 2',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
    
  ]);
});

app.listen(3333, ()=>{
  console.log('🚀Server started🚀')
});