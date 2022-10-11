docker exec -it node-app bash

docker run -p 4000:3000 -d --name node-app node-app-image

docker ps

docker rm node-app -f

docker run -d --name node-app node-app-image

docker build -t node-app-image .

docker image ls

docker image rm 19523f631c04

docker build .

npm init -y

npm install express

node index.js
