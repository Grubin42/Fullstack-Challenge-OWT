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

const initDb = () => {
    return new Promise((resolve, reject) => {
      const maxRetries = 10; // Nombre maximal de tentatives de connexion
      const retryInterval = 3000; // Intervalle entre chaque tentative de connexion (en millisecondes)
      let retries = 0;
  
      const connect = () => {
        sequelize
          .sync({ force: true })
          .then(() => {
            console.log('La SYNC à la base de données a réussi.');
  
            boats.forEach((boat) => {
              Boat.create({
                name: boat.name,
                description: boat.description,
                picture: boat.picture,
              })
                .then((boat) => console.log(boat.toJSON()))
                .catch((error) => console.error(`Erreur lors de la création du bateau : ${error}`));
            });
  
            bcrypt.hash('1234', 10)
              .then((hash) => {
                User.create({
                  username: 'gael',
                  password: hash,
                })
                  .then((user) => console.log(user.toJSON()))
                  .catch((error) => console.error(`Erreur lors de la création de l'utilisateur : ${error}`));
              })
              .catch((error) => console.error(`Erreur lors du hachage du mot de passe : ${error}`));
  
            resolve();
          })
          .catch((error) => {
            if (retries < maxRetries) {
              retries++;
              console.log(`Tentative de connexion à la base de données (${retries}/${maxRetries})...`);
              setTimeout(connect, retryInterval);
            } else {
              reject(`Impossible de se connecter à la base de données : ${error}`);
            }
          });
      };
  
      console.log('Initialisation de la base de données...');
      connect();
    });
  };
  
/*
const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
        boats.map(boat => {
            Boat.create({
                name: boat.name,
                description: boat.description,
                picture: boat.picture
            })
            .then(boat => console.log(boat.toJSON()));
        })

        bcrypt.hash('1234', 10)
        .then(hash => {
            User.create({
                username: 'gael',
                password: hash
            })
        })
        .then(user => console.log(user.toJSON()))

        console.log('La SYNC à la bdd a réussi.')
    })
    .catch(error => console.error(`impossible de SYNC a la bdd : ${error}`))
}
*/
module.exports = {
    initDb, Boat, User, sequelize
}