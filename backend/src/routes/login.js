const { User } = require('../db/sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key');

module.exports = (app) => {
    app.post('/api/login', async (req, res) => {
        try {
            const user = await User.findOne({
                where: { username: req.body.username }
            });

            if (!user) {
                const message = `L'utilisateur demandé n'existe pas.`;
                return res.status(404).json({ message });
            }

            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordValid) {
                const message = `Le mot de passe est incorrect.`;
                return res.status(401).json({ message });
            }

            const token = jwt.sign(
                { userId: user.id },
                privateKey,
                { expiresIn: '24h' }
            );

            const message = `L'utilisateur a été connecté avec succès.`;
            res.json({
                message,
                data: user,
                token
            });
        } catch (error) {
            const message = `L'utilisateur n'a pas pu être connecté. Réessayez dans quelques instants.`;
            res.json({
                message,
                data: error
            });
        }
    });
};
