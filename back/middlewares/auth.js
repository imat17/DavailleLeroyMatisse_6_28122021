const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'YOU_SHALL_NOT_PAST_GANDALF_LOTR');
        const userId = decodedToken.userId;
        if ( req.body.userId && req.body.userId !== userId) {
            throw `ID de l'utilisateur invalide`;
        } else {
            next();
        }
	} catch (error) {
		res.status(401).json({ error: error | 'Reqûete non authentifiée' });
	}
};
