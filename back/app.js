// Importation d'express
const express = require('express');

// Importation + paramètrage Mongoose
const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://imat17:vicecity123@cluster0.5alvs.mongodb.net/cluster0?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

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
