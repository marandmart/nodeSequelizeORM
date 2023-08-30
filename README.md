# Project details

PORT used to access MySQL: 8000

# Setup

- Create a .env file to setup desired port for the node project

- Create the MySQL using the Dockerfile with the following command inside the mysql folder

```
docker build -t mysql-server .
```

```
docker run -d -p 8000:3306 --name mysql -v database:/var/lib/mysql mysql-server
```
