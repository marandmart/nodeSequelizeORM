porta utilizada pelo mysql: 8000

Criar o arquivo .env e configurar uma PORT para o projeto

subir o container do mysql:

```
docker build -t mysql-server .
```

```
docker run -dp 8000:3306 -v $(pwd)/database:/database --name mysql mysql-server
```
