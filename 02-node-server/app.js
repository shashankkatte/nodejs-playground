// One of the most interesting and confusing part in node js is digesting the fact that you can write your own server (unlike in PHP)

// You need to import the capability to bring up a server through HTTP and this is how you include the module readily provided by node
const http = require('http');

// the http object has the create server method which does what its named after - creates a server. it takes a call back function as an argument here we use an anonymous function and are logging request object to the console
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Response from node</title></head>');
  res.write('<body><h1>Hello from Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
});

// Now we need this server to be always listening so... this is how we do it.
server.listen(3000);

// Isnt this a piece of cake? hang on to see more of what node can do.
