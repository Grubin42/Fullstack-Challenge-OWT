const { Boat } = require('../db/sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.delete('/api/boats/:id', auth, async (req, res) => {
        try {
            const boat = await Boat.findByPk(req.params.id);
            if (boat === null) {
                const message = 'Le bateau demandé n\'existe pas. Utilisez un autre identifiant.';
                return res.status(404).json({ message });
            }

            const boatDelete = boat;
            await Boat.destroy({
                where: { id: boat.id }
            });

            const message = `${boat.name} a été supprimé`;
            res.json({
                message,
                data: boatDelete
            });
        } catch (error) {
            const message = 'Le bateau demandé n\'a pas pu être supprimé. Réessayez dans un instant.';
            res.status(500).json({
                message,
                data: error
            });
        }
    });
};
