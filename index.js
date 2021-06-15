'use strict';
// index.js serves as an entry point 

const server = require('./server.js');

const PORT = 3000;

server.listen(PORT, ()=>{
  console.log(`server is running at PORT:${PORT}`);
});
