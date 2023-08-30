# Use the official MySQL image as the base image
FROM mysql

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD=root

# Create a local volume called "data" to store the database information
VOLUME /var/lib/mysql

# Add SQL scripts to be executed when database runs
COPY ./db/createDatabase.sql /docker-entrypoint-initdb.d/

# run in terminal
# docker build -t mysql-server .
# docker run -d -p 8000:8000 --name mysql_container -v data:/var/lib/mysql mysql-server

# inside image
# mysql -u root -p -> to access mysql