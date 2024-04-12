# Contacts App

Basic app that allows us to store contacts data. It's made up of a web client and a REST API made with Express on which we can execute CRUD operations. Data is stored in a JSON file,nevertheless a MongoDB model is already implemented.

## Consume the API
You can consume the API using the web client, any REST client like Postman or curl using the endpoints described [below](#Endpoints). You can also use the requests in [`req.http`](./server/test.req.http)

## Build in local
```bash
# Start the server
cd server
npm install
npm run dev
cd..
# Start the client
cd client
npm install
npm run dev
```

## Run tests
```bash
npm run test-json
```


## Backend
### Technologies
- Node.js
- Express
- MongoDB
- Mocha and Chai for testing
- Zod for data validation

### Endpoints

#### 1. `GET /v1/contacts`

- **Description:** Retrieve all contacts.
- **Request Type:** `GET`
- **Query Parameters:**
    - `age` (Number): Filter contacts by age
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** Array of contacts

#### 2. `GET /v1/contacts/<name>`

- **Description:** Retrieve a specific contact by name.
- **Request Type:** `GET`
- **Parameters:**
    - `name` (String): Name of the contact
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** Contact details
    - **Status Code:** 404 Not Found (If the contact is not found)

#### 3. `POST /v1/contacts`

- **Description:** Create a new contact.
- **Request Type:** `POST`
- **Body:** Contact information
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** New contact details
    - **Status Code:** 400 Bad Request (If the request body is invalid)

#### 4. `PATCH /v1/contacts:id`

- **Description:** Update a specific contact by name.
- **Request Type:** `PATCH`
- **Parameters:**
    - `name` (String): Name of the contact
- **Body:** Updated contact information
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** Updated contact details
    - **Status Code:** 400 Bad Request (If the request body is invalid)
    - **Status Code:** 404 Not Found (If the contact is not found)

#### 5. `DELETE /v1/contacts:id`

- **Description:** Delete a specific contact by name.
- **Request Type:** `DELETE`
- **Parameters:**GitHub seems not to be displaying the header correctly: try adding a space after the hash
    - **Status Code:** 200 OK
    - **Body:** Deleted contact details
    - **Status Code:** 404 Not Found (If the contact is not found)

## TODO
- [x] Complete tests
- [-] MongoDB integration
- [x] Age as query parameter

## Frontend
### Technologies
- HTML, CSS and Vanilla JavaScript

## TODO
- [ ] Edit Modal
- [ ] Delete button 




