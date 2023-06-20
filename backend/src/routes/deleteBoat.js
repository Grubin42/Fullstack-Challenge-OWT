const { Boat } = require('../db/sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.delete('/api/boats/:id', auth, (req,res) => {
        Boat.findByPk(req.params.id).then(boat => {
            if(boat === null) {
                const message = 'Le boat demandé n\'existe pas. Utilisé un autre id';
                return res.status(404).json({message});
            }
            const boatDelete = boat;
            return Boat.destroy({
                where: { id: boat.id }
            })
            .then(_ => {
                const message = `${boat.name} à été supprimé`;
                res.json({
                    message,
                    data: boatDelete
                })
            })
        })
        .catch(error => {
            const message = 'Le boat demandé n\'a pas pu être supprimé. Réessayez dans un instant';
            res.status(500).json({
                message,
                data: error
            });
        })
    })
}