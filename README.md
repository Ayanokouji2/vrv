
# VRV Security Project

VRV Security is a web-based application designed for secure data management and user authentication.

## Features

- **User Authentication:** Secure login and registration system.
- **Data Encryption:** Implements advanced encryption standards for secure data storage.
- **Role-Based Access Control:** Provides different access levels for admins and users.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Project Structure

```
/vrvsecurity
│   ├── public          # Static files (e.g., images, icons)
│   ├── src
│   │   ├── components  # React components for UI
│   │   ├── pages       # Pages rendered by the application
│   │   ├── services    # API service files
│   │   ├── App.js      # Main application file
│   │   └── index.js    # Entry point for the React application
│   └── package.json    # Frontend dependencies and scripts
└── README.md           # Project documentation
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Ayanokouji2/vrv.git
   cd vrvsecurity
   ```

2. Install dependencies for project:

   ```bash
   npm install
   ```


4. Start the application:

   - vrvsecurity:
    ```bash
     npm run dev
     ```

5. Open your browser and navigate to `http://localhost:5173`.

## Scripts


### Project

- `npm run dev` - Starts the React development server.
