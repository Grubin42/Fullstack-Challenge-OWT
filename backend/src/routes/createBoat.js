const { Boat } = require('../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/boats', auth, (req,res) => {
        Boat.create(req.body)
        .then(boat => {
                const message = `${req.body.name} à été créé`;
                res.json({
                    message,
                    data: boat
                })
            })
            .catch(error => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({
                        message: error.message,
                        data: error
                    })
                } else if (error instanceof UniqueConstraintError) {
                    return res.status(400).json({
                        message: error.message,
                        data: error
                    })
                }
                const message = 'Le boat demandé n\'a pas pu être ajouté. Réessayez dans un instant'
                res.status(500).json({
                    message,
                    data: error
                })
            })
    })
}