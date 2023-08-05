const http = require('http')
const app = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World')
    } else if (req.url == '/raman') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Raman')
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact')
    } 
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Not Found')
    }
});



app.listen(3000, () => {
    console.log('listening on port 3000');
})