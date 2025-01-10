# User Authentication API with RBAC

A Node.js authentication API with Role-Based Access Control (RBAC), built using Express and Sequelize.

## Features

- User Authentication (Register, Login, Logout)
- Role-Based Access Control (RBAC)
- Password Reset Functionality
- Email Notifications
- Input Validation
- Error Handling
- MySQL Database Integration with Sequelize
- JWT-based Authentication
- Secure Password Hashing

## API Endpoints

###  User Authentication

- POST /api/auth/register - Register a New user
- POST /api/auth/login - Login User
- POST /api/auth/forgot-password - Request Password Reset
- POST /api/auth/reset-password/:token - Reset Password
- POST /api/auth/change-password - Change Password (protected)
- GET /api/auth/admin-only  -Access to Admin Route (protected)
