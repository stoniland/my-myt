import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('./server.json');
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Дозволяє доступ з усіх доменів
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Дозволяє вказані методи
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Дозволяє вказані заголовки
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');  




 
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Сервер працює на http://${hostname}:${port}/`);
});
