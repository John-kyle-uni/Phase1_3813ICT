# Documentation

## Git

First is to setup the angular/cli into the terminal to have a base structure to complete the task. After setting up, the development branch was created to avoid always updating the main branch and to avoid mistakes. For my git documentation, when a feature or requirement is done with the program the code will be pushed to the development branch and if there are no further bugs will be then merged to the main branch.
By using the Angular services creating a component ensures that the code for front-end and serverside are separeted to organize the code for each compenent.

## Data Structurs 

For now, the data collected will be stored in LocalStorage for the webite to function. The user's data will be collected like email, date of birth and full name. The group data structure will consist on the members of the channel, the admins, group ID and name of the group.

## Angular Architecture
List of components:
- AccountComponent
    - This component is where users can view their profile. 
- LoginComponent
    - This is where users will have to login in order to use the software.
- VerificationComponent
    - This page will show up after the login page to verify the user.
- Chat component
    - this component will have the main codes such us the group chats and more.

Each component has a route created to use and to navigate to those pages.