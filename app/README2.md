# Documentation

## data structures
All the data structures are stored in the model folder. the sign up or user creation will take the values for user ID, username, password, email, and roles.
this will all be stored in mongodb data by connecting the server to the database and using the client or create user component to get the values.

## Rest api routes

- add-api
    - this route lets the user add or create a new user.
- api-edit
    - allows user to edit or update a user.
- api-delete
    - lets a user delete a user from the database.
- api-getlist
    - allows user to show all the created users.
- api-usercount
    - counts how many users are created.
- api-verify
    - this verifies the users logging in the app.

## angular architecture

List of components
- account
    - this allows user to check their accounts
- chat
    - allows the user to use the chat application
- home
    - this is the main page of the app
- login
    - this is where a user can login or signup
- nav
    - basically the same with home page
- user-create
    - this is the sign up page
- user-edit
    - this lets a user edit their account
- user-get
    - this shows the list of all users
- verification
    - this component helps to verify users

list of service
- socket service
    - this holds the function to send and recieve messages in the app
- userdata service
    - this allows client side of the app to communicate with the server and database side
    

