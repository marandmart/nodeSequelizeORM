# Project details

PORT used to access MySQL: 8000

# Setup

- Create a .env file to setup desired port for the node project

- Create the MySQL server using the Dockerfile

- Build image

```
docker build -t mysql-server -f ./mysql/Dockerfile ./mysql
```

- Run mysql server

```
docker-compose -f ./mysql/docker-compose.yml up -d
```

- Execute model migrations

```
npx sequelize-cli db:migrate
```

- Generate mock data

```
npx sequelize-cli db:seed:all
```
