# Post List – React Comment Application

This project is a modern React application that allows users to browse different posts and dynamically view the comments associated with each post. The app prioritizes user experience with clean data handling, a component-based structure, and responsive design.

![image](https://github.com/user-attachments/assets/cf2100ad-0ee8-4ab0-aa0d-8b20344616f9)

## Project Overview

The **Post List** application provides a platform where users can view a list of posts, navigate to the details of each post, and read the related comments. It aims to build proficiency in fetching data, organizing components, and optimizing user interactions using React fundamentals.

![image](https://github.com/user-attachments/assets/06733916-1bbf-492c-b4d0-d367e4ce2901)

## Key Features

### 1. Fetching Data from API

The app fetches data from three different API endpoints:

- **Post List:** Displays all posts on the homepage.
- **Post Details:** Shows the details of the selected post.
- **Comments:** Lists all comments related to the selected post.

Data fetching is handled using the `useEffect` hook.

### 2. useState and Prop Drilling

`useState` is used for state management, and data is passed between components using prop drilling. Each component receives the necessary data as props to maintain a clean data flow.

### 3. Dynamic and Responsive Design

The application is designed to work efficiently on both desktop and mobile devices. The layout is optimized for various screen sizes using a mobile-first approach. Modern CSS techniques like **Flexbox** and **CSS Grid** are used for layout design.

### 4. Code Readability with Comments

To improve code clarity, inline comments are included throughout the project. These comments help both personal understanding and assist others in easily navigating and comprehending the codebase.

## Live Demo

[https://comments-section-pi.vercel.app](https://comments-section-pi.vercel.app)

## Installation

To run this project on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/gayedinc/comments-section.git
```

### 2. Navigate into the Project Directory

```bash
cd comments-section
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will typically run at:  
[http://localhost:5173](http://localhost:5173)

---

## What I Learned

Through this project, I gained practical experience in:

- Fetching data and structuring components in React
- Effectively using `useState` and `useEffect` hooks
- Managing data flow using prop drilling
- Implementing responsive design for different devices
- Writing clear and maintainable code with helpful inline comments

## Project Structure

```bash
comments-section/
├── public/
│   └── index.html               # HTML template
├── src/
│   ├── assets/
│   │   └── reset.css            # CSS reset for browser consistency
│   ├── App.css                  # Global styles
│   ├── App.jsx                  # Root component
│   └── main.jsx                 # React entry point
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
├── eslint.config.js             # ESLint configuration
├── index.html                   # Vite HTML entry
├── package-lock.json            # Dependency lock file
├── package.json                 # Project metadata and dependencies
└── vite.config.js               # Vite config file
