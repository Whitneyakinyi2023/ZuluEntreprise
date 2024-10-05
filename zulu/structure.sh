#!/bin/bash

# Create directories
mkdir -p src/components
mkdir -p src/contexts
mkdir -p src/utils

# Create files in the components directory
touch src/components/Navbar.js
touch src/components/Footer.js
touch src/components/Home.js
touch src/components/ProductList.js
touch src/components/ProductDetail.js
touch src/components/ShoppingCart.js
touch src/components/Checkout.js
touch src/components/OrderTracking.js

# Create AuthContext in contexts directory
touch src/contexts/AuthContext.js

# Create utility files in utils directory
touch src/utils/api.js
touch src/utils/payment.js

# Create App.js and index.js in src directory
touch src/App.js
touch src/index.js

echo "Folder structure and files created successfully!"
