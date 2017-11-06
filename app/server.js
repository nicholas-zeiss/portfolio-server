

const express = require('express');
const path = require('path');
const vhost = require('vhost');


const app = express();

const production = express();

production.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'subdomain.html'));
});

app.use(vhost('production.nickzeiss.com', production));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(50000);

