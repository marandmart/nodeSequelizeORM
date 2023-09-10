# Project details

Project created to study SQL CRUD operations through an ORM using NodeJS and Sequelize library.

The project objectives were:

- Create a simple NodeJS API with express project applying MVC.
- Create a MySQL server through a dockerfile.
- Understand the basics of ORM.
- Using sequelize to make CRUD operations.

# Setup

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
