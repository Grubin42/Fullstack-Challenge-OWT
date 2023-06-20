const { Boat } = require('../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/boats', auth, async (req, res) => {
        try {
            const boat = await Boat.create(req.body);
            const message = `${req.body.name} a été créé`;
            res.json({
                message,
                data: boat
            });
        } catch (error) {
            if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
                return res.status(400).json({
                    message: error.message,
                    data: error
                });
            }
            const message = "Le bateau demandé n'a pas pu être ajouté. Réessayez dans un instant.";
            res.status(500).json({
                message,
                data: error
            });
        }
    });
};