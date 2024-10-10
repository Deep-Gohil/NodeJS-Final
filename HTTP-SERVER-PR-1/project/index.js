const http = require('http');
const fs = require('fs');
const path = require('path');

const serveFile = (filePath, contentType, response) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(500);
            response.end('Server Error', 'utf-8');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
};

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            serveFile(path.join(__dirname, 'public', 'index.html'), 'text/html', res);
            break;
        case '/login':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Login Page');
            break;
        case '/signup':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Signup Page');
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Contact Page');
            break;
        case '/service':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Service Page');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
    }
});

server.listen(8090, () => {
    console.log('listening on port 8090');
});
