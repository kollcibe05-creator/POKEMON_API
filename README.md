There are basically two types Javascript , CommonJS and ESM(ECMAScript Modules).

They differ in terms of set-up and therefore JSON setup are doomed to differ for both cases with slight but key changes.

1. As always, create a *README*, *LICENSE* and a *.gitignore* file.
Not pushing the node_modules allows Render to create one of its own.


2. Create the *db.json* file. It should be in the **root(/)** directory.
3. Create a *main.js* or *index.js* (derived by convention). They are the sole files as they contain the set-up code.

For the case of commonJs, the file should take up the structure: 
```js
// Using require() syntax because package.json is "type": "commonjs"
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your data file
const middlewares = jsonServer.defaults();

// Get the port from Render's environment variable (or use 3000 locally)
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server v0.17.4 is running successfully on port ${port}`);
});

```
As the description specifies, CommonJS uses the term **require** .

The line of code: 
```
const router = jsonServer.router('db.json'); // Path to your data file

```
is where you will input the file name. For my case it will be *pokemon.json*.

___
ECMAScript modules on the other hand do not allow key terms like *require* therefore the index.js/main.js syntax will take the structure: 
```js


```
___

4. Initialize the *package.json* file.
For a step-by-step set-up, use the command:
```
npm init
```
then follow along.

For a faster set-up without considering all details, use:
```
npm init -y
```
5. Install json-server. 
```
npm install json-server
```

### Common Gotchas
- Initializing package.json may not include the **start** attribute in the *scripts* object; add it manually so that the format is:
```js
"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- The default Javascript type is usually CommonJS, therefore not exclusively specifying if it is a module will result to an error. Specify if using a module but for the case of CommonJS, you may choose to include or leave it; Your call not mine!
```js
"type": "commonjs",
```
Or: 
```js
"type": "module",
```

### Common Gotcha
CommonJS works on json-server versions below **1.x**.

To ensure it works you must use a stable version below the mark which is usually **0.17.4**.
Therefore run the installation with the specification of the version:
```code
npm install json-server@0.17.4
```

6. In Render, create a new Web Service.
7. Connect it to your github repo.
8. For the Settings, leave the other details blank except for: 


```text
Build Command: npm install 
Start Command: npm start
```
<!-- ECMScript Modules:  -->
Or:

```text
Build Command: npm install 
Start Command: node index.js
```
Interchangably they will still work though;


And that's basically it!!!
