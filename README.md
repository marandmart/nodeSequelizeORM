# Project details

Project created to study SQL CRUD operations through an ORM using NodeJS and Sequelize library.

The project objectives were::

- Create a simple NodeJS API with express project applying MVC.
- Create a MySQL server through a dockerfile.
- Understand the basics of ORM with Sequelize.
- Use sequelize to model the data of an API.
- Generate mock data to populate the MySQL server.
- Understand how to structure these types of projects.
- Add soft delete functionality through Sequelize.

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

- Compile typescript files and copy .js sequelize files to output directory

```
npm run/yarn compile
```

- Start server

```
npm run/yarn start
```
