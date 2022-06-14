# Dev Excuses - Back

API in nodeJs Express
Allow user to retrieve dev's excuses, and also post new one

## Installation

You will need NPM installed on your computer

Clone the project : https://github.com/Takoouh/dev_excuses_back.git

```bash
  git clone https://github.com/Takoouh/dev_excuses_back.git
  cd dev_excuses_back
```

Install the dependencies

```bash
  npm i
```

Then you can start the project with nodemon to have the server running and hot reloading when change are made

```bash
  npm start
```

Server run on port 8080, but you can change it in the index.js at the root of directocty (line 12)

## Documentation for API Endpoints

All URIs are relative to _https://localhost:8080/_

| Method         | HTTP request      | Description                                 |
| -------------- | ----------------- | ------------------------------------------- |
| **getExcuses** | **GET** /excuses  | Get all dev excuses as JSON                 |
| **postExcuse** | **POST** /excuses | Add new excuse, get all excuses as response |
