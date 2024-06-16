import http from 'http';

// const PORT = 8000;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    
    // res.write('Hello World!');
    // res.end();

    // res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.end("<h1>Hello World!!!</h1>")

    // res.writeHead(500, {
    //     'Content-Type': 'text/json',
    //   });
    // res.end(JSON.stringify({message: 'Server Error'}));

    try {
        // Check if GET request
        if(req.method === 'POST') {
            // router, routing
            if(req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end("<h1>Homepage!!!</h1>");
            } else if (req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end("<h1>About!!!</h1>");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end("<h1>Not Found!!!</h1>");
            }
        } else {
            throw new Error('Method not allowed');
        }
        
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end("<h1>Server Error!!!</h1>");
    }
    

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});