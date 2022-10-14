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

docker run -v $(pwd):/app -p 3000:3000 -d --name node-app node-app-image

docker ps -a

docker logs node-app

//didn't work
docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image

docker run -v $(pwd):/app:ro -v /app/node_modules/ -p 3000:3000 -d --name node-app node-app-image

docker run -v $(pwd):/app:ro -v /app/node_modules/ --env PORT=4000 -p 3000:4000 -d --name node-app node-app-image

docker run -v $(pwd):/app:ro -v /app/node_modules/ --env-file ./.env -p 3000:5000 -d --name node-app node-app-image

-- to see all envs in container
printenv

docker volume prune

--deletes volumes along with container
docker rm node-app -fv

docker-compose up -d

docker ps

docker-compose down -v

-- force build
docker-compose up -d --build

// for dev
docker-compose -f docker-compose.yml -f docker-compose-
dev.yml up -d

docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v

MongoServerError: command listDatabases requires authentication

docker-compose -f docker-compose.yml -f docker-compose-
prod.yml up -d

docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v

docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

docker exec -it docker-playground_node-app_1 bash

docker exec -it docker-playground_mongo_1 bash

mongosh -u sagar -p key

docker exec -it docker-playground_mongo_1 mongosh -u sagar -p key
