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

docker-compose -f docker-compose.yml -f docker-compose-
prod.yml up -d

docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v

docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

docker exec -it docker-playground_node-app_1 bash

docker exec -it docker-playground_mongo_1 bash

mongosh -u sagar -p key

docker exec -it docker-playground_mongo_1 mongosh -u sagar -p key

docker volume ls

docker volume --help

docker volume prune

use dockerdb

show dbs

db.books.insert({ "name": "sagar" })

db.books.find();

docker inspect docker-playground_mongo_1

docker logs docker-playground_node-app_1

docker exec -it docker-playground_node-app_1 bash
ping mongo

docker network ls
docker network inspect docker-playground_default

docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build --renew-anon-volumes

docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build -V

docker exec -it docker-playground_redis_1 bash

redis-cli

docker exec -it docker-playground_redis_1 redis-cli

KEYS \*

GET "key"

docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --scale node-app=2

docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build -V

https://get.docker.com

in .profile
set -o allexport; source /root/.env; set +o allexport

while read LINE; do export "$LINE"; done < .env
