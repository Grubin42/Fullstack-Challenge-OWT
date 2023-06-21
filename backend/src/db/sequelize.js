const { Sequelize, DataTypes } = require('sequelize');
const BoatModel = require('../models/boat');
const UserModel = require('../models/user');
const boats = require('./mock-boat');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const sequelize = new Sequelize (process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {  
    host: 'database',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: true
})

const Boat = BoatModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const initDb = async () => {
    const maxRetries = 10;
    const retryInterval = 3000;
    let retries = 0;

    const connect = async () => {
        try {
            await sequelize.sync({ force: true });
            console.log('La SYNC à la base de données a réussi.');

            for (const boat of boats) {
                try {
                    const createdBoat = await Boat.create({
                        name: boat.name,
                        description: boat.description,
                        picture: boat.picture,
                    });
                    console.log(createdBoat.toJSON());
                } catch (error) {
                    console.error(`Erreur lors de la création du bateau : ${error}`);
                }
            }

            const hash = await bcrypt.hash('1234', 10);
            const createdUser = await User.create({
                username: 'gael',
                password: hash,
            });
            console.log(createdUser.toJSON());

            return; // Succès de la promesse
        } catch (error) {
            if (retries < maxRetries) {
                retries++;
                console.log(`Tentative de connexion à la base de données (${retries}/${maxRetries})...`);
                await new Promise(resolve => setTimeout(resolve, retryInterval));
                await connect();
            } else {
                throw new Error(`Impossible de se connecter à la base de données : ${error}`);
            }
        }
    };

  console.log('Initialisation de la base de données...');
  await connect();
};

  
module.exports = {
    initDb, Boat, User, sequelize
}