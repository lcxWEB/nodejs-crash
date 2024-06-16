import http from 'http';

const PORT = 8000;

const server = http.createServer((req, res) => {
    // res.write('Hello World!');
    // res.end();

    // res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.end("<h1>Hello World!!!</h1>")

    res.writeHead(500, {
        'Content-Type': 'text/json',
      });
    res.end(JSON.stringify({message: 'Server Error'}));
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});