const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('pokemon.json'); // Path to your data file
const middlewares = jsonServer.defaults();

// Get the port from Render's environment variable (or use 3000 locally)
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server v0.17.4 is running successfully on port ${port}`);
});