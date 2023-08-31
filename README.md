# Project details

PORT used to access MySQL: 8000

# Setup

- Create a .env file to setup desired port for the node project

- Create the MySQL using the Dockerfile with the following command inside the mysql folder

- Build image

```
docker build -t mysql-server .
```

- Run mysql server

```
docker compose up -d
```
