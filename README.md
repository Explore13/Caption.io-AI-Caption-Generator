# Caption.io

**Caption.io** is a web-based platform that allows users to upload images and generate captions using artificial intelligence. This project was built as part of a challenge where the objective was to create an AI-powered application in one day.

### Challenge Overview

- **Challenge**: Build an AI-powered application in one hour.
- **Planning**: I thought that I will build the Backend only. And I completed it in **30-45 minutes**.
- **Timeline**:
  - Backend (Node.js, Express, and Gemini API) was built in **30-45 minutes**.
  - Frontend (React.js and Tailwind CSS) took around **2 hours**.
  - Afterward, I spent time fixing bugs and finalizing the project.

The project integrates both a **Node.js/Express** backend and a **React.js** frontend, and uses the **Gemini API** for AI-based caption generation.

## Table of Contents

- [Caption.io](#captionio)
    - [Challenge Overview](#challenge-overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Usage](#usage)
  - [File Structure](#file-structure)
  - [Technologies](#technologies)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Available Scripts](#available-scripts)
    - [Backend](#backend-1)
    - [Frontend](#frontend-1)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Image Upload**: Users can upload images directly from their devices.
- **AI Caption Generator**: Uses AI (via Gemini API) to generate captions based on the uploaded image.
- **Toast Notifications**: Displays success, error, and information messages using toast notifications.
- **Responsive Design**: The application is mobile-friendly and scales well across different screen sizes.
- **Static Pages**: Includes Terms and Conditions, Privacy Policy, and Contact Us pages.
- **404 Handling**: Displays a custom "Not Found" page for invalid URLs.

## Installation

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/caption-io.git
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd caption-io/backend
   ```

3. **Install Backend Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the `backend` directory and add the following environment variables:

   ```bash
   PORT=8000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Start the Backend Server:**

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd ../frontend
   ```

2. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Frontend Development Server:**

   ```bash
   npm start
   ```

4. **Visit the Application:**

   Open your browser and visit `http://localhost:5173` to view the app.

> **Note:** The frontend will make API calls to `http://localhost:8000/api/v1/<route>` for caption generation.

## Usage

- **Image Upload**: Click on the upload button to upload an image and generate a caption using the AI system.
- **Notifications**: Toast notifications will appear for success or error messages based on actions performed.
- **Pages**: Visit `/terms-conditions`, `/privacy-policy`, and `/contact-us` for additional static information.
- **404 Handling**: Accessing invalid URLs will show a "Page Not Found" message.

## File Structure

```
caption-io/
│
├── backend/                     # Backend code (Node.js, Express)
│   ├── controllers/             # Controllers for API endpoints
│   ├── routes/                  # API routes
│   ├── config/                  # Gemini API configuration and integration
│   ├── .env                     # Environment variables
│   ├── index.js                   # Main Express app
│
├── frontend/                    # Frontend code (React.js)
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Static pages (Terms, Privacy, etc.)
│   │   ├── App.jsx               # Main app component
│   │   ├── Main.jsx             # Entry point of the app
│
├── .gitignore                   # Git ignore file
├── README.md                    # Project documentation
└── package.json                 # NPM dependencies and scripts
```

## Technologies

### Backend

- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Web framework for Node.js used to build the backend.
- **Gemini API**: Used for AI caption generation.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Handles routing between different pages in the frontend.
- **Toast Notifications**: For real-time success and error messages.

## Available Scripts

In the project directory, you can run the following commands for both **frontend** and **backend**:

### Backend

- **`npm start`**: Runs the Node.js backend server.
- **`npm run dev`**: Runs the backend in development mode using nodemon.

### Frontend

- **`npm run dev`**: Runs the React app in development mode.
- **`npm run build`**: Builds the app for production to the `build` folder.

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Added a new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

Please ensure your code follows the project's code style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
