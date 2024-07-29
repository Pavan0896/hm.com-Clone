# H&M Clone

H&M Clone is a full-stack web application that mimics the features of the H&M e-commerce platform. This project includes multiple pages, user authentication, and various functionalities to enhance the user experience.

## Features

- **Multiple Pages**: Navigate through different sections such as Home, Products, Categories, and more.
- **Private Route**: Secure routes that require user authentication to access.
- **Filtering and Sorting**: Filter products by various criteria and sort them as per user preference.
- **User Registration and Login**: Users can register, log in, and authenticate to access personalized features.
- **Password Management**: Users can change their password if forgotten.
- **Dynamic URL**: URLs reflect the current state, allowing the same page or filtered data to appear when copied and pasted into another tab.
- **Favorites**: Add or remove products from favorites using a heart-shaped SVG toggle button.
- **Backend Authentication**: User authentication and token generation for accessing private routes.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **React-Redux**: Official React bindings for Redux.
- **Chakra UI**: Modular and accessible component library.
- **Bootstrap**: CSS framework for responsive design.

### Backend
- **Express**: Web framework for Node.js.
- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Mongoose**: MongoDB object modeling tool.
- **MongoDB**: NoSQL database for storing user and product data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pavan0896/hm.com-Clone.git
   cd hm.com-Clone
2. Install frontend dependencies:
   ```bash
   cd Frontend
   npm install
3. Install backend dependencies:
   ```bash
   cd Backend
   npm install
4. Setup .env variables:
   ```bash
   PORT = 3000
   MONGO_URL =  
   JWT_SECRET = 
5. Start backend server:
   ```bash
   cd Backend
   npm run dev
6. Start frontend server:
   ```bash
   cd Frontend
   npm run dev

## Acknowledgments

- **Chakra UI**: This project uses [Chakra UI](https://chakra-ui.com/), a modular and accessible component library for React.
- **Bootstrap**: This project uses [Bootstrap](https://getbootstrap.com/), a CSS framework for responsive design.
- **H&M Images**: Product images are sourced from [H&M](https://www.hm.com/).

Special thanks to the open-source community for providing the tools and resources that made this project possible.

   
