# Utilisez une image de base avec Node.js
FROM node:14-alpine

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le package.json et le package-lock.json (si applicable)
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel le backend écoute
EXPOSE 3000

# Démarrez le backend
CMD ["node", "app.js"]