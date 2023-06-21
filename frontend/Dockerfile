# Utiliser une image de base avec Node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Build du projet React
RUN npm run build

# Utiliser une image légère basée sur Nginx pour servir l'application construite
FROM nginx:alpine

# Copier les fichiers construits à partir de l'étape précédente vers le répertoire approprié de Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exposer le port sur lequel Nginx écoute
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

