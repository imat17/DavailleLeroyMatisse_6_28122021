const mongoose = require('mongoose');

// Création du schéma de données

const sauce = mongoose.Schema({
	userId: { type: String, required: true },
	name: { type: String, required: true },
	manufacturer: { type: String, required: true },
	description: { type: String, required: true },
	mainPepper: { type: String, required: true },
	imageUrl: { type: String, required: true },
	heat: { type: Number, required: true },
	likes: { type: Number, required: false },
	dislikes: { type: Number, required: false },
	userLiked: { type: [String], required: false },
	userDisliked: { type: [String], required: false },
});

module.exports = mongoose.model('Sauce', sauce);
