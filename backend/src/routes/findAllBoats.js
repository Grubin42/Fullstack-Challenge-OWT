const { Boat, sequelize } = require('../db/sequelize');
const { Op } = require('sequelize');//opérateur sequelize
const auth = require('../auth/auth');

const limitBoat = 2;

module.exports = (app) => {
    app.get('/api/boats', auth, (req,res) => {
        if (req.query.name) {
            const term = req.query.name;
            return Boat.findAll({ where: { 
                name: { 
                    [Op.like]: `%${term}%`
                } 
            },
            order: sequelize.random(),
            limit: limitBoat
        })
        .then(boats => {
            const message = 'Voici tous les boats.';
            res.json(boats)
        })
        } else {
            Boat.findAll({
                order: sequelize.random(),
                //limit: limitBoat
            })
            .then(boats => {
                    const message = 'Voici tous les boats.';
                    res.json(boats)
                })
                .catch(error => {
                    const message = `Echec du chargement des boats. Réessayez dans un instant.`
                    res.status(500).json({
                        message,
                        data: error
                    })
                })
        }
    })
}