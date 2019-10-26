let express = require('express');
let app = express();
let proxy = require('http-proxy-middleware');
let port = 4000;

app.use(proxy('/homes', {target: 'http://ec2-3-133-13-167.us-east-2.compute.amazonaws.com:3022'}));
app.use(proxy('/house/*', {target: 'http://ec2-18-191-252-172.us-east-2.compute.amazonaws.com:3005'}));
app.use(proxy('/api/houses/*', {target: 'http://ec2-3-14-70-59.us-east-2.compute.amazonaws.com:3006'}));
app.use(proxy('/rooms/*', {target: 'http://ec2-54-186-189-144.us-west-2.compute.amazonaws.com:3000'}));
app.use(express.static('public'));

app.listen(port, () => console.log(`Proxy server running on port ${port}`));