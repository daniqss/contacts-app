# API Documentation

## Endpoints

### 1. `GET /api/v1`

- **Description:** Retrieve all contacts.
- **Request Type:** `GET`
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** Array of contacts

### 2. `GET /api/v1/:name`

- **Description:** Retrieve a specific contact by name.
- **Request Type:** `GET`
- **Parameters:**
    - `name` (String): Name of the contact
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** Contact details
    - **Status Code:** 404 Not Found (If the contact is not found)

### 3. `POST /api/v1`

- **Description:** Create a new contact.
- **Request Type:** `POST`
- **Body:** Contact information
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** New contact details
    - **Status Code:** 400 Bad Request (If the request body is invalid)

### 4. `PATCH /api/v1/:name`

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

### 5. `DELETE /api/v1/:name`

- **Description:** Delete a specific contact by name.
- **Request Type:** `DELETE`
- **Parameters:**
    - `name` (String): Name of the contact
- **Response:**
    - **Status Code:** 200 OK
    - **Body:** Deleted contact details
    - **Status Code:** 404 Not Found (If the contact is not found)

## Setup

#### Development

``` bash
npm run dev
```

#### Production

``` bash
npm run prod
```

## TODO
- [] Complete tests
- [] Add authentication
- [] MongoDB integration
- [] Age as query parameter


