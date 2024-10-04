#!/bin/bash

# Create client folder and its structure
mkdir -p client/public
mkdir -p client/src/components
mkdir -p client/src/pages
mkdir -p client/src/services
mkdir -p client/src/styles

# Create main client files
touch client/src/App.js
touch client/src/index.js

# Create server folder and its structure
mkdir -p server/config
mkdir -p server/controllers
mkdir -p server/models
mkdir -p server/routes
mkdir -p server/middleware
mkdir -p server/utils

# Create main server file
touch server/server.js

# Create root files
touch .env
touch package.json
touch README.md

echo "Project structure created successfully!"