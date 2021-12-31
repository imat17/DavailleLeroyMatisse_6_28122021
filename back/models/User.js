const mongoose = require('mongoose');

// Package de prévalidation des informations
const uniqueValidator = require('mongoose-unique-validator');

// Création du modèle de données 
const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

// On exporte le schéma sous forme de modèle
module.exports = mongoose.model('User', userSchema);
