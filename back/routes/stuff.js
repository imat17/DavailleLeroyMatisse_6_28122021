const express = require('express');
const router = express.Router();

// Importation du model de sauces
const controllerStuff = require('../controllers/stuff');

// Importation du middleware AUTH
const auth = require('../middlewares/auth');

// Importation de MULTER 
const multer = require('../middlewares/multer-config');

//------ROUTES----
router.post('/', auth, multer, controllerStuff.createSauce);

router.get('/', auth, controllerStuff.getAllSauce);

router.get('/:id', auth, controllerStuff.getOneSauce);

router.delete('/:id', auth, controllerStuff.deleteSauce);

router.put('/:id', auth, controllerStuff.modifySauce);

module.exports = router;
