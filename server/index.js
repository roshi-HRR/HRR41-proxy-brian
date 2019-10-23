let express = require('express');
let app = express();
let proxy = require('http-proxy-middleware');
let port = 4000;

app.use(proxy('/house', {target: 'http://localhost:3002'}));
app.use(proxy('/api/houses', {target: 'http://localhost:3004'}));
app.use(express.static('public'));

app.listen(port, () => console.log(`Proxy server running on port ${port}`));