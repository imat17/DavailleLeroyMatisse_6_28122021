// Importation d'express
const express = require('express');

// Notre application > express
const app = express();

// Interseption de toutes les reqûetes JSON
app.use(express.json());

// Middlewares

// Autorisations CORS
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

module.exports = app;
