import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// const PORT = 8000;
const PORT = process.env.PORT;

// get current path __filename, __dirname not available when you're using ES module
// create our own
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// /Users/lichunxia/Documents/demos/nodejs-crash/server.js /Users/lichunxia/Documents/demos/nodejs-crash
console.log(__filename, __dirname);

const server = http.createServer(async(req, res) => {
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

    // try {
    //     // Check if GET request
    //     if(req.method === 'POST') {
    //         // router, routing
    //         if(req.url === '/') {
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end("<h1>Homepage!!!</h1>");
    //         } else if (req.url === '/about') {
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end("<h1>About!!!</h1>");
    //         } else {
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end("<h1>Not Found!!!</h1>");
    //         }
    //     } else {
    //         throw new Error('Method not allowed');
    //     }
        
    // } catch (error) {
    //     res.writeHead(500, {'Content-Type': 'text/html'});
    //     res.end("<h1>Server Error!!!</h1>");
    // }
    
    try {
        // Check if GET request
        if(req.method === 'GET') {
            let filePath;
            // router, routing
            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');;
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();

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