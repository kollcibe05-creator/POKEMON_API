
// import jsonServer from 'json-server'; //Yeah, the only diff!

// const server = jsonServer.create();
// const router = jsonServer.router('pokemon.json'); 
// const middlewares = jsonServer.defaults();

// // Get the port from Render's environment variable (or use 3000 locally)
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port, () => {
//   console.log(`JSON Server is running in ESM mode on port ${port}`);
// });


import { create, router as _router, defaults } from 'json-server'

const server = create()
const router = _router('db.json') // path to your data file
const middlewares = defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
