# Portfolio Website with CMS

A modern, full-stack portfolio website with a Content Management System (CMS) built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌟 Features

- **Modern Design**: Clean and responsive user interface
- **Content Management System**: Easy-to-use admin dashboard
- **Dynamic Projects Section**: Showcase your work with images and links
- **Contact Form**: Let visitors reach out to you
- **Secure Authentication**: Protected admin routes and operations
- **Mobile Responsive**: Looks great on all devices

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- Modern CSS with responsive design

### Backend
- Node.js & Express.js
- MongoDB for database
- JWT for authentication
- Bcrypt for password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/Shobhita93/EazyBytes.git
cd portfolio-website-with-cms
```

2. Install frontend dependencies
```bash
cd client
npm install
```

3. Install backend dependencies
```bash
cd ../Server
npm install
```

4. Set up environment variables
Create a .env file in the Server directory with:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Start the development servers

For backend:
```bash
cd Server
node server.js
```

For frontend:
```bash
cd client
npm start
```

## 🔐 Admin Access
To access the admin dashboard:
1. Navigate to /admin
2. Log in with your credentials
3. Manage your projects through the dashboard

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   └── axiosConfig.js # Axios configuration
│   └── public/           # Static files
└── Server/               # Backend Node.js server
    ├── models/          # Database models
    ├── routes/          # API routes
    ├── middleware/      # Custom middleware
    └── server.js        # Server entry point
```

## 💡 Future Enhancements

- Blog section
- Project categories
- Image optimization
- Social media integration
- Dark mode support

## 👤 Author

- Shobhita
- GitHub: [@Shobhita93](https://github.com/Shobhita93)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
