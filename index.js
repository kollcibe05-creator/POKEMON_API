
import jsonServer from 'json-server'; //Yeah, the only diff!

const server = jsonServer.create();
const router = jsonServer.router('pokemon.json'); 
const middlewares = jsonServer.defaults();

// Get the port from Render's environment variable (or use 3000 locally)
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running in ESM mode on port ${port}`);
});