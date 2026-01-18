# BrewHaven Coffee Shop

A modern coffee shop application built with Next.js 15 (App Router).

## Features

- **Landing Page**: A beautiful, 7-section landing page showcasing the brand.
- **Menu**: Browse our coffee and pastry selection (fetched from Next.js API).
- **Authentication**: specialized Mock login system (User: `user@example.com`, Pass: `password`).
- **Protected Admin Area**: Authenticated users can add new items to the menu.
- **Backend**: Built-in Next.js API Routes (`/api/items`) handling data persistence.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Application**:
   ```bash
   npm run dev
   ```

3. **Access the App**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - API Endpoint: [http://localhost:3000/api/items](http://localhost:3000/api/items)

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `app/api/`: API Routes for backend logic.
- `components/`: Reusable UI components (Navbar, Footer).
- `lib/`: Shared utilities (Data access layer).
- `data/items.json`: JSON file acting as a database.
- `public/`: Static assets.

## User Credentials for Testing

- **Email**: `user@example.com`
- **Password**: `password`

## Technologies Used

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS (v4)
- **Icons**: React Icons
