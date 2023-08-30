# lib

Library Management System
A website to help a librarian manage all the information related to a library.
Uses Firebase for authorization and Firestore as database.

Use these login credentials:

Email: testadmin@library.com
Password: testpassword

Features
Admin login (firebase authorization).
Add, edit and delete books.
Add, edit and delete members.
Book availability status.
Future plans
More responsive table with sorting and searching.
Use images. Add description card with details.
Book issue/return portal, linking members and books database.
Automatic calculation of fines on return default.

Built With
ReactJS
Firebase
Material UI
React router
Environment Variables
To run this project, you will need to add the following environment variables to your .env file

REACT_APP_FIREBASE_API_KEY
REACT_APP_AUTH_DOMAIN
REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
Available Scripts
This project was bootstrapped with Create React App.
In the project directory, you can run:

npm start : Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

npm test : Launches the test runner in the interactive watch mode.

npm run build : Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm run eject : If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

You can learn more in the Create React App documentation.
