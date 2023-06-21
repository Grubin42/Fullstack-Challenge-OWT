# Utilisez une image légère de Nginx comme base
FROM nginx:alpine

# Supprimez le fichier de configuration Nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copiez votre fichier de configuration personnalisé
COPY nginx.conf /etc/nginx/conf.d/

# Exposez le port sur lequel Nginx écoute
EXPOSE 80

# Démarrez Nginx
CMD ["nginx", "-g", "daemon off;"]