# Simple-crud
Simple crud user with nodejs, express and mongo
## Pre requirement
nodejs, npm and mongo (deamon)
# Install
```
$ npm install
```
#Run
```
$ node server.js
```
#Is working now?
Check it: [http://localhost:9000/users](http://localhost:9000/users)
#Test with curl
###GET all
```
$ curl -i -X GET http://localhost:9000/users
```
###GET single
```
$ curl -i -X GET http://localhost:9000/users/5758e8e86140ae580d6b1350
```
###DELETE
```
$ curl -i -X DELETE http://localhost:9000/users/5758e8e86140ae580d6b1350
```
###POST
```
$ curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Alberto", "email": "alberto@alberto.xyz"}' http://localhost:9000/users
```
###PUT
```
$ curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "Berto", "email": "Berto@Berto.xyz"}' http://localhost:9000/users/5758e8e86140ae580d6b1350
```
