# MERN E-commerce Platform 

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Admin Dashboard](#admin-dashboard)
- [Payment Integration](#payment-integration)
- [Order Tracking](#order-tracking)
- [Search and Filter](#search-and-filter)
- [WhatsApp Order Handling](#whatsapp-order-handling)
- [Chatbot Support](#chatbot-support)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [License](#license)

## Project Overview

This project is an e-commerce platform built for a local enterprise that runs a chain of liquor stores and provides event planning services. It allows customers to browse products, add them to a cart, and check out using payment gateways like **Stripe** and **Daraja**. Additionally, customers looking for event planning services can get cost estimates and manage their orders through the platform. 

There is also an **Admin Dashboard** for managing products, tracking orders, and monitoring customer information. For ease of customer interaction, the platform integrates with WhatsApp for order handling and features a **chatbot** for customer support.

## Features

- **Product Listing**: Customers can view a variety of products.
- **Search & Filter**: Advanced search and filter functionality to find products.
- **Shopping Cart**: Customers can add, remove, and modify products in their cart.
- **User Authentication**: Secure login and registration (required for order checkout).
- **Payment Gateway Integration**: Integrated with **Stripe** and **Daraja API** for payments.
- **WhatsApp Integration**: Redirects orders to WhatsApp for users who do not want to register.
- **Order Tracking**: Customers can track the status of their orders.
- **Admin Dashboard**: Admins can manage products, customers, and orders.
- **Chatbot Support**: Automated chatbot for customer support.
- **Event Planning Estimates**: Customers can get estimated costs for event planning services.

## Technology Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Payment Gateway**: Stripe, Daraja API (Mobile Money Integration)
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Customer Support**: Dialogflow (or custom chatbot)
- **WhatsApp Integration**: Twilio API or WhatsApp Business API

## Prerequisites

Before running this project locally, make sure you have the following installed:

- Node.js (v14 or later)
- MongoDB (local instance or MongoDB Atlas)
- A Stripe account for payment integration
- Access to Daraja API (for mobile money payments in certain regions)
- WhatsApp Business API (for order handling via WhatsApp)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Start the development server:**
   - In the **server** directory:
     ```bash
     npm run dev
     ```
   - In the **client** directory:
     ```bash
     npm start
     ```

## Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=yourJWTSecret
STRIPE_SECRET_KEY=yourStripeSecretKey
DARAJA_API_KEY=yourDarajaAPIKey
DARAJA_API_SECRET=yourDarajaAPISecret
WHATSAPP_API_KEY=yourWhatsAppAPIKey
```

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - User login

### Products
- **GET** `/api/products` - Get all products
- **POST** `/api/admin/products` - Add a new product (admin only)
- **PUT** `/api/admin/products/:id` - Update product details (admin only)
- **DELETE** `/api/admin/products/:id` - Delete a product (admin only)

### Orders
- **POST** `/api/orders` - Place a new order
- **GET** `/api/orders/:userId` - Get all orders for a specific user
- **GET** `/api/order/:orderId` - Get details of a specific order

### Stripe Payments
- **POST** `/api/payment/stripe` - Create a Stripe payment session

### Daraja Payments
- **POST** `/api/payment/daraja` - Create a Daraja payment session

### WhatsApp Orders
- **POST** `/api/whatsapp/orders` - Send an order to WhatsApp

## Usage

1. **Frontend**: Visit `http://localhost:3000` to access the platform.
2. **Backend**: The server runs on `http://localhost:5000`.

## Admin Dashboard

To access the admin dashboard:
1. Login as an admin.
2. Navigate to `/admin/dashboard`.
3. Manage products, view orders, and track customer data.

### Admin Features
- **Add Products**: Create new products with details like name, description, price, category, and stock status.
- **Manage Orders**: Track all orders placed by customers.
- **View Customer Info**: Access customer details and order history.

## Payment Integration

This platform integrates **Stripe** for card payments and **Daraja** for mobile money transactions (specific to certain regions).

To test Stripe payments, use the following test card credentials:
- Card Number: `4242 4242 4242 4242`
- Expiry: Any valid future date
- CVC: Any 3 digits

For Daraja, use sandbox credentials to simulate mobile money payments.

## Order Tracking

Once an order is placed, customers can track its status under the **Order History** page. Status updates include:
- **Processing**
- **Shipped**
- **Delivered**

## Search and Filter

Customers can use the search bar to find products by name or description. Filters are available for:
- Price range
- Product category
- Availability

## WhatsApp Order Handling

For customers who prefer not to create an account, the platform allows sending orders to WhatsApp for further payment handling and support. This feature ensures flexibility for users who want a simpler checkout experience.

## Chatbot Support

The platform features a chatbot (integrated via **Dialogflow** or a custom bot) to assist users with queries such as:
- Product availability
- Order status
- Payment issues

## Future Enhancements

- **Wishlist**: Allow users to save products for future purchase.
- **Reviews & Ratings**: Customers can leave feedback on products.
- **Discount Codes**: Implement a system for applying promo codes during checkout.
- **Multilingual Support**: Provide translations for different languages.

## Contributors

- **[Whitney Ologi](mailto:whitneyakinyi73@gmail.com)** - Developer & Project Lead
- Additional contributors can add their names here.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
