TReadBooks is an online Book Exchange Web Application for book enthusiasts to trade books with members of the community!
To run this App on your machine please follow below steps:
1. Pull the current repository or download it as a zip file.
2. Install the required tools for running the app:
    * VSCode
    * NodeJS
    * MongoDB
3. This app uses React for fronend, Express and Node for the backend, and MongoDB as a Database.
4. Open terminals to the .\Frontend folder and to the .\Backend folder.
5. Run npm install in both the Frontend and Backend terminals.
6. The command to run the Frontend is `npm run dev`
7. The command to run the Backend is `npm start`
    7.1. Optionally Postman can be installed for checking GET/POST requests.
8. Connect to the database at https://localhost:27017
10. Add the books_list.json file from `Frontend/Public` to MongoDB, to ensure the booklist is getting added to DB
11. Open https://localhost:5173 after `npm dev run` on frontend terminal. This will take you to the application page.
12. Explore the app by signing up or logging in, accessing the user profile, etc.