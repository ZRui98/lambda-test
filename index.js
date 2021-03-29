const serverless = require('serverless-http');
const express = require('express');
const app = express()

app.get('/resource', function(req, res) {
	res.send('get resource');
});

app.post('/resource', function(req, res) {
	res.send('post resource');
});

app.put('/resource', function(req, res) {
	res.send('put resource');
});

app.delete('/resource', function(req, res) {
	res.send('delete resource');
});

module.exports.handler = serverless(app);
