local:
	echo "starting local environment"
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build