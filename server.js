const http= require('http');
const fs = require('fs');
const index = fs.readFileSync('index.js');

let app = http.createServer((req, res) => {
res.writeHead(200,{'Content-Type': 'text/plain'});
res.end(index);
});

app.listen(9030, '0.0.0.0');
console.log('Node server running on port 9030')
