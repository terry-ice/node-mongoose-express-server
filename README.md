# Simple Node mongoose with Express Server with REST API

## Features

* Babel 7
* mongoose
* Environment Variables
* Express
* REST API


### GET Routes

* visit http://localhost:3002
  * /messages
  * /messages/1
  * /users
  * /users/1

### Beyond GET Routes

#### CURL

* Create a message with:
  * `curl -X POST -H "Content-Type:application/json" http://localhost:3002/messages -d '{"text":"Hi again, World"}'`
* Delete a message with:
  * `curl -X DELETE -H "Content-Type:application/json" http://localhost:3002/messages/1`

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:3002/messages
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Delete a message with:
  * URL: http://localhost:3002/messages/1
  * Method: DELETE
