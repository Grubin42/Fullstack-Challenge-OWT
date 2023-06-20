const { Boat, sequelize } = require('../db/sequelize');
const { Op } = require('sequelize');
const auth = require('../auth/auth');

const limitBoat = 2;

module.exports = (app) => {
    app.get('/api/boats', auth, async (req, res) => {
        try {
            if (req.query.name) {
                const term = req.query.name;
                const boats = await Boat.findAll({
                    where: {
                        name: {
                        [Op.like]: `%${term}%`
                        }
                    },
                    order: sequelize.random(),
                    limit: limitBoat
                });

                const message = 'Voici tous les bateaux.';
                res.json(boats);
            } else {
                const boats = await Boat.findAll({
                    order: sequelize.random(),
                    // limit: limitBoat
                });

                const message = 'Voici tous les bateaux.';
                res.json(boats);
            }
        } catch (error) {
            const message = 'Échec du chargement des bateaux. Réessayez dans un instant.';
            res.status(500).json({
                message,
                data: error
            });
        }
    });
};
