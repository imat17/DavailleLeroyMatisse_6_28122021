// Importation d'express
const express = require('express');

const userRoutes = require('./routes/user');
// Importation + paramètrage Mongoose
const mongoose = require('mongoose');

// Importation du router
const SauceRoutes = require('./routes/stuff');

// Importation CORS
const cors = require('cors');


// Connection à MongoDB

require('dotenv').config();

// console.log(process.env.mongoConnect);

mongoose
	.connect(
		`${process.env.mongoConnect}`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

// Notre application > express
const app = express();

// Interseption de toutes les reqûetes JSON
app.use(express.json());

//--------------------------------------Middlewares-------------------------------

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

app.use(cors());

// Enregistrement du routeur d'authentification
app.use('/api/auth', userRoutes);

// Importation des routes
app.use('api/stuff', SauceRoutes);

module.exports = app;
