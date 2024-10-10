# Documentation

## Git

First is to setup the angular/cli into the terminal to have a base structure to complete the task. After setting up, the development branch was created to avoid always updating the main branch and to avoid mistakes. For my git documentation, when a feature or requirement is done with the program the code will be pushed to the development branch and if there are no further bugs will be then merged to the main branch.
By using the Angular services creating a component ensures that the code for front-end and serverside are separeted to organize the code for each compenent.

## Data Structurs 

### Old
For now, the data collected will be stored in LocalStorage for the webite to function. The user's data will be collected like email, date of birth and full name. The group data structure will consist on the members of the channel, the admins, group ID and name of the group.

User represents username, password, birthdate, email.
### New


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
- Group-management component
    - this would only be accessable to group admins and super admins. This page is where admins can create and delete groups.
- Nav component
    - this is the page only seen by the admins where they can edit the groups and add or delete users and their roles.
- Roles component 
    - this is the component available for admins only and they can add or remove roles from users.

Each component has a route created to use and to navigate to those pages.

## API
The Login component has a function once the submit button is clicked the information of the user is saved allowing the to view the website either as a user or an admin.