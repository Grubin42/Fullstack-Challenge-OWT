# Utilisez une image de base qui contient Node.js
FROM node:14

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers du frontend
COPY . .

# Build de l'application
RUN npm run build

# Exposez le port
EXPOSE 5173

# Démarrez l'application
CMD ["npm", "run", "build"]