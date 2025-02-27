cd cv-interactif
docker-compose down
docker rmi laurentarcos/cv-interactif:latest
git pull
docker-compose build --no-cache
docker-compose up -d