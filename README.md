# Redis Clone - Lightweight Key-Value Store

## Overview

This project implements a simple Redis-like key-value store using Node.js and the `net` module. It listens for client connections and processes `SET` and `GET` commands following the Redis protocol.

## Features

- Handles `SET` and `GET` commands.
- Uses a JavaScript object as an in-memory key-value store.
- Implements a lightweight Redis protocol parser using `redis-parser`.
- Supports basic client-server communication over TCP.

## Installation & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Clone the Repository

```sh
git clone https://github.com/your-username/redis-clone.git
cd redis-clone
```

### Install Dependencies

```sh
npm install
```

## Usage

### Start the Server

Run the following command to start the Redis clone server:

```sh
node index.js
```

The server will start listening on port 8000.

### Connecting to the Server

You can use netcat (or any TCP client) to interact with the server:

```sh
redis-cli -p 8000
```

## Commands

### SET Command

Stores a key-value pair in the in-memory store:


### GET Command

Retrieves a value for a given key:

If the key does not exist, it returns Null:


## How It Works

- The server listens for incoming TCP connections.
- It uses `redis-parser` to parse incoming requests in Redis protocol format.
- It processes `SET` and `GET` commands, storing data in an in-memory JavaScript object.
- Responses follow Redis protocol conventions.

## Future Improvements

- Add expiration times for keys.
- Support more Redis commands like `DEL`, `EXISTS`, and `INCR`.
- Implement persistence with file storage.
- Add authentication mechanisms.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.


