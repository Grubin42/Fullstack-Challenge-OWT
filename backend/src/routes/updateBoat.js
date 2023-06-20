const { Boat } = require('../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.put('/api/boats/:id', auth, async (req, res) => {
        try {
            const id = req.params.id;

            await Boat.update(req.body, {
                where: { id: id }
            });

            const boat = await Boat.findByPk(id);
            if (boat === null) {
                const message = 'Le bateau demandé n\'existe pas. Utilisez un autre identifiant.';
                return res.status(404).json({ message });
            }

            const message = `${boat.name} a été modifié.`;
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

            const message = 'Le bateau demandé n\'a pas pu être modifié. Réessayez dans un instant.';
            res.status(500).json({
                message,
                data: error
            });
        }
    });
};
