# PEDALO

# Application CRUD de gestion de bateaux

Cette application est un challenge web réalisé pour l'entreprise OpenWeb. Elle permet de gérer une liste de bateaux en offrant des fonctionnalités CRUD (Create, Read, Update, Delete). Les utilisateurs peuvent consulter la liste des bateaux, afficher les détails d'un bateau sélectionné, le modifier si nécessaire, créer un nouveau bateau ou le supprimer. Le système d'authentification permet aux utilisateurs de se connecter et de s'inscrire en tant que nouveaux utilisateurs.

## Technologies utilisées

- Backend : Node.js, Express.js, Sequelize (ORM)
- Frontend : React.js, Materialze(css)
- Base de données : MariaDB
- Outil de gestion de la base de données : phpMyAdmin
- Serveur Web : Nginx
- Conteneurisation : Docker

## Installation

Pour exécuter l'application localement, suivez les instructions ci-dessous :

1. Clonez le dépôt Git :


2. Lancez les conteneurs Docker en utilisant la commande suivante :

- make up


Cette commande lancera les conteneurs Docker pour le backend, le frontend, la base de données et phpMyAdmin.

3. Attendez que les conteneurs se construisent et se lancent. Une fois terminé, vous pouvez accéder à l'application dans votre navigateur en utilisant l'URL suivante : [http://localhost:80](http://localhost:80)

## Configuration

### Backend

Le backend de l'application est développé en utilisant Node.js et Express.js. Assurez-vous de configurer correctement les informations de connexion à la base de données (créé un fichier .env sur l'enxemple envExemple dans le backend).

### Frontend

Le frontend est développé en utilisant React.js. Les fichiers sources se trouvent dans le répertoire `frontend/src`.

## Fonctionnalités

L'application offre les fonctionnalités suivantes :

- Affichage de la liste des bateaux
- Affichage des détails d'un bateau
- Modification d'un bateau existant
- Création d'un nouveau bateau
- Suppression d'un bateau existant
- Système d'authentification des utilisateurs
- Inscription en tant que nouvel utilisateur

## Auteurs

- Backend : Gaël Rubin
- Frontend : Jérémie Schreyer

N'hésitez pas à nous contacter pour toute question ou préoccupation.

