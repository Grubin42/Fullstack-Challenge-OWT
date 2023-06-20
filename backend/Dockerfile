# Utilise une image de base pour Node.js
FROM node:14

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Port sur lequel l'application écoute
EXPOSE 3000

# Commande de démarrage de l'application
CMD [ "npm", "start" ]