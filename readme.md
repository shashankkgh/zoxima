Steps for run the application.

- npm i
- npm i nodemon -d
- update env file with your credential.
- nodemon index.js
- Once your server is ready and sucessfully connected with the database.

step -
1- registeg user
2- login user


There are curl request you can run this on postman for get Result.

// curl for register user

curl -X POST \
  http://localhost:3000/user-registration \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 78' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 6998b6f8-c05c-438d-ba71-a67e7519c4f7,65b2f689-d030-4f26-adf8-747448904661' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache' \
  -d '{
	"username":"shashank@test.co",
	"password":"Shashank@123",
	"role":"User"
}'

// curl for user login

curl -X POST \
  http://localhost:3000/user-login \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 62' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 2c5b14d1-6087-4f39-8ca8-1ec0a354ce12,b01c5d9e-71e7-4d20-b133-02f2ae4b3729' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache' \
  -d '{
	"username":"shashank@test.co",
	"password":"Shashank@123"
}'
