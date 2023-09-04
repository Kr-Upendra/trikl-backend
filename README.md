# Assignment

Option 2: Back-end Development with Node.js

## Objective:

Develop a Node.js backend with RESTful APIs to interact with a front-end application. Use MongoDB for the database.

### Requirements:

- Create RESTful APIs for CRUD operations.
- Use MongoDB as the database.
- Test the APIs using Postman or a similar tool.

### API Endpoints:

- GET /items: Fetch all items.
- POST /items: Create a new item.
- PUT /items/:id: Update an existing item.
- DELETE /items/:id: Delete an item.

## Get Started

### Prerequisties

1. Node.js and npm: Make sure you have nodejs and npm installed in your system.

### Installation

1. clone the repository:

```bash
  git clone https://github.com/Kr-Upendra/trikl-backend.git
```

2. Navigate to the project directory

```bash
  cd trikl-backend
```

3. Create a .env file and add the following..

   - PORT=3000 <b>[optional]</b>
   - DATABASE=mongodb://127.0.0.1:27017/test or Mongo Atlas URI <b>[Required]</b>

<br>
4. Install dependencies

```bash
  npm install
```

### Usage

1. Start the server

```bash
  npm start
```

### Testing

You can test APIs using [Postman](https://www.postman.com/downloads/) or other tools like [Insomnia](https://insomnia.rest/download)

### API Documentation

find api Documentation at [here.](https://elements.getpostman.com/redirect?entityId=29148295-78b6a41a-48c2-4e0a-b4cb-5ed4ba98a5bd&entityType=collection)
