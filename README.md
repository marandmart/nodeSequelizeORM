# Project details

Project created to study SQL CRUD through an ORM using NodeJS and Sequelize library.
The objectives were:

- Creating a simple NodeJS API with express project applying MVC.
- Creating a MySQL server through a dockerfile.
- Understanding the basics of ORM.
- Using sequelize to make CRUD operations.

# Setup

PORT used to access MySQL: 8000

- Create a .env file to setup desired port for the node project

- Create the MySQL server using the Dockerfile

- Build docker image

```
docker build -t mysql-server -f ./mysql/Dockerfile ./mysql
```

- Run mysql server

```
npm run/yarn up-server
```

- Execute model migrations and create mock data

```
npm run/yarn create-mock-data
```

- Start server

```
npm run/yarn start
```
