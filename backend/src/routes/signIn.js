const { User } = require('../db/sequelize');
const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key');
const bcrypt = require('bcryptjs');

module.exports = (app) => {
    app.post('/api/signin', async (req,res) => {
        try {
            const hash = await bcrypt.hash(`${req.body.password}`, 10);
            const createdUser = await User.create({
                username: req.body.username,
                password: hash,
            });
            const token = jwt.sign(
                { userId: createdUser.id },
                privateKey,
                { expiresIn: '24h' }
            );
            const message = `${req.body.username} a été créé`;
            res.json({
                message,
                data: createdUser,
                token
            });
        }catch (error) {
            if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
                return res.status(400).json({
                    message: error.message,
                    data: error
                });
            }
            const message = "Le utilisateur demandé n'a pas pu être ajouté. Réessayez dans un instant.";
            res.status(500).json({
                message,
                data: error
            });
        }
    })
}