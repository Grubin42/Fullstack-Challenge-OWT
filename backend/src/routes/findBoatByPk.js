const { Boat } = require('../db/sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.get('/api/boats/:id', auth, (req,res) => {
        Boat.findByPk(req.params.id)
        .then(boat => {
                if(boat === null) {
                    const message = 'Le boat demandé n\'existe pas. Utilisé un autre id';
                    return res.status(404).json({message});
                }
                const message = 'Voici votre boat.';
                res.json({
                    message,
                    data: boat
                })
            })
            .catch(error => {
                const message = 'Le boat demandé n\'a pas pu être trouvé. Réessayez dans un instant';
                res.status(500).json({
                    message,
                    data: error
                });
            })
    })
}