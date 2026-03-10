There are basically two  Javascript standard syntaxes, CommonJS and ESM(ECMAScript Modules).

They differ in terms of set-up and therefore JSON setups are doomed to differ for both cases with slight but key changes.

## 1. As always, create a *README*, *LICENSE* and a *.gitignore* file.  
Not pushing the node_modules allows Render to create one of its own.


## 2. Create the *db.json* file. It should be in the **root(/)** directory.
Ensure the json data is error-free.  
Of course these details are if you don't love unnecessary headaches.
## 3. Create a *main.js* or *index.js* (derived by convention), the sole file that bear scripts to set up the packages and modules for deploy.
For the case of CommonJs, the file should take up the structure: 
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
As the comments point out, CommonJS uses the term **require** .

The line of code: 
```
const router = jsonServer.router('db.json'); // Path to your data file

```
is where you will input the file name. For my case it will be *pokemon.json*.

___
ECMAScript modules on the other hand do not allow terms like *require*; they are modular; therefore the index.js/main.js syntax will take the structure: 
```js

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

```
___

## 4. Initialize the *package.json* file.
For a step-by-step set-up, use the command:
```
npm init
```
then follow along.

For the TL;DR folks who prefer a  faster set-up without considering all details, use:
```
npm init -y
```
## 5. Install json-server. 
```
npm install json-server
```

### Common Gotcha #1
- Initializing package.json may not include the **start** value in the *scripts* object; add it manually so that the format is:
```js
"scripts": {
    "start": "node index.js",
  },
```
- The default Javascript standard is usually CommonJS, therefore not exclusively specifying if it is a module will result to an error when deploying using a modular set-up.   Specify if using a module but for the case of CommonJS, you may choose to include or leave it; Your call, not mine!
```js
"type": "commonjs",
```
Or: 
```js
"type": "module",
```

### Common Gotcha #2
CommonJS works on json-server versions below **1.x**.

To ensure it works you must use a stable version below the mark which is usually **0.17.4**.
Therefore run the installation with the specification of the version:
```code
npm install json-server@0.17.4
```
then in package.json assume the format: 
```js
"dependencies": {
    "json-server": "0.17.4"
  }
```
along with other dependencies you may need innit.

### NOTE
There have typically been no other stable version json-server other than **0.17.4**.  
To be on the safe side when dealing with ECMAScript Modules, assume this syntax using *`^0.17.4`*: 
```js
"dependencies": {
    "json-server": "^0.17.4"
  }
```
You will have to run `npm install` again after the specs you would have made.

## 6. In Render, create a new Web Service.
## 7. Connect it to your GitHub repo.
## 8. For the Settings, leave the other details blank except for: 


```text
Build Command: npm install 
Start Command: npm start
```
Or:

```text
Build Command: npm install 
Start Command: node index.js
```
Interchangably they will still work though;

### Heads Up
There might be some cases where you may have to adjust the versions manually and as a result, the node_modules and package-lock.json may fall out of sync. When deploying you may as a result encounter errors like *'MODULE not found'* as a case.    
In that case, you will have to delete them both and run `npm install` again: 
```
rm -rf node_modules package-lock.json
```
```
npm install
```

And that's basically it!!!
