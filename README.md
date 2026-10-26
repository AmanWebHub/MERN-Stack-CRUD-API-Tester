# MERN Product API Tester

A small full-stack API testing dashboard for exercising product CRUD operations through a browser-based interface.

## Overview

The application connects a React frontend to an Express REST API and stores product records in MongoDB through Mongoose. Zustand manages the product list and frontend CRUD actions.

## Features

- Fetch all products
- Create products
- Update existing products
- Delete products
- Display operation results and error messages
- Update the frontend product list after successful mutations

## Tech Stack

- MongoDB
- Mongoose
- Node.js
- Express.js
- React + Vite
- Zustand

## Product Schema

| Field | Type | Required |
|---|---|---|
| `name` | String | Yes |
| `price` | Number | Yes |
| `description` | String | Yes |
| `image` | String | Yes |

Mongoose timestamps are enabled for `createdAt` and `updatedAt`.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

The current API response format uses a `success` flag, a `message`, and a `data` property where product data is returned.

## Running Locally

1. Install the backend dependencies.
2. Configure the MongoDB connection string and server port in a local `.env` file, according to the backend configuration.
3. Start the Express backend using the script configured in the relevant `package.json`.
4. Install dependencies in the `client` directory.
5. Configure a Vite proxy or API base URL so frontend requests to `/api` reach the Express server.
6. Start the Vite development server and open the local URL printed in the terminal.

> Update these instructions with the exact commands and environment variable names used in this repository. Never commit `.env` files or database credentials.

## Testing Checklist

- [ ] Fetch products
- [ ] Create a product
- [ ] Update a product
- [ ] Delete a product
- [ ] Verify required-field validation
- [ ] Verify error handling when the API is unavailable

## Scope Notes

This project demonstrates basic product CRUD operations and frontend/backend integration. Pagination, search, filtering, API documentation, automated tests, and deployment features should only be described as complete after they have been implemented and verified.

