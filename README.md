
### LRU Cache React Application

## Description
This project is a React application that interacts with an LRU (Least Recently Used) cache implemented in a Go backend. The cache stores key/value pairs with an expiration time and exposes API endpoints to perform GET, SET, and DELETE operations. This README file focuses on the front-end part of the project.

## Features

- LRU Cache implementation with adjustable expiration times for keys.
- Concurrent safe operations using Go's built-in concurrency mechanisms.
- Backend server built with Go and HTTP handlers for GET, SET, and DELETE operations.
- WebSocket implementation to dynamically reflect current key-value pairs and their expiration times in the UI.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
