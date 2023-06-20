const { Boat } = require('../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.put('/api/boats/:id', auth, (req,res) => {
        const id = req.params.id;
        B$.update(req.body, {
            where: {id: id}
        })
        .then(_ => {
                return Boat.findByPk(id).then(boat => {
                    if(boat === null) {
                        const message = 'Le boat demandé n\'existe pas. Utilisé un autre id';
                        return res.status(404).json({message});
                    }
                    const message = `${boat.name} à été modifié`;
                    res.json({
                        message,
                        data: boat
                    })
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
                const message = 'Le boat demandé n\'a pas pu être modifié. Réessayez dans un instant';
                res.status(500).json({
                    message,
                    data: error
                });
            })
    })
}