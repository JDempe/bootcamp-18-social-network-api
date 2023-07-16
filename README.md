[![License: MIT license](https://img.shields.io/badge/License-MIT_license-success)](https://opensource.org/licenses/MIT)    
![Project status](https://img.shields.io/badge/Status-Complete-success)

# CBC Week 18 Challenge: Social Network API

## General Information

This is the week 18 challenge for the UC Berkeley Coding Bootcamp.  The goal is to use MongoDB and Mongoose to create a social network API.  The API will allow users to create user accounts, add friends to users, create thoughts, and add reactions to thoughts.  The API will also allow users to update and delete their own thoughts and reactions.

## Table of Contents

* [General Information](#general-information)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough Video](#walkthrough-video)
* [Credits](#credits)
* [Contact](#contact)
* [License](#license)
* [How to Contribute](#how-to-contribute)

## Technologies Used

* [node.js v18.12.1](https://nodejs.org/en) -  A scalable server-side JavaScript runtime;
* [MongoDB v4.1.1](https://www.mongodb.com/) - A document-oriented, No-SQL database used to store the data for the application.
* [Mongoose v6.0.12](https://mongoosejs.com/) - An Object Data Modeling (ODM) library for MongoDB and Node.js.
* [express v4.18.2](https://www.npmjs.com/package/express) - Web application framework for building server-side applications.
* [nodemon v2.0.22](https://www.npmjs.com/package/nodemon) - Development tool for automatically restarting the server during code changes.

## Installation
### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [MongoDB Compass](https://www.mongodb.com/products/compass)
* [Insomnia](https://insomnia.rest/)
* [Git](https://git-scm.com/)

### Local Installation
If you would prefer to see a local version of the site, follow the steps below:

1. Clone the [repository](https://github.com/JDempe/bootcamp-18-social-network-api) to your local machine.
2. Navigate to the root directory of the cloned repository in your terminal.
3. Run `npm install` to install the dependencies.
4. Start the server by running `npm start` or `npm run nodemon` if you have nodemon installed.
5. Open MongoDB Compass and connect to the database.

## Usage
### Homepage

Use Insomnia to test the API.  The following routes are available:

#### Users

- GET all users: `http://localhost:3001/api/users`
- GET a single user by id: `http://localhost:3001/api/users/:userId`
- POST (create) a new user: `http://localhost:3001/api/users`
    - Params:
        - `username` - The username of the user.
        - `email` - The email address of the user.
- PUT (update) a user by id: `http://localhost:3001/api/users/:userId`
    - Params:
        - `username` - The username of the user.
        - `email` - The email address of the user.
- DELETE a user by id: `http://localhost:3001/api/users/:userId`

#### Friends

- POST (create) a new friend: `http://localhost:3001/api/users/:userId/friends/:friendId`
    - Params:
        - `friendId` - The id of the friend to add.
- DELETE a friend: `http://localhost:3001/api/users/:userId/friends/:friendId`

#### Thoughts

- GET all thoughts: `http://localhost:3001/api/thoughts`
- GET a single thought by id: `http://localhost:3001/api/thoughts/:thoughtId`
- POST (create) a new thought: `http://localhost:3001/api/thoughts`
    - Params:
        - `thoughtText` - The text of the thought.
        - `username` - The username of the user that created the thought.
- PUT (update) a thought by id: `http://localhost:3001/api/thoughts/:thoughtId`
    - Params:
        - `thoughtText` - The text of the thought.
- DELETE a thought by id: `http://localhost:3001/api/thoughts/:thoughtId`

#### Reactions

- POST (create) a new reaction: `http://localhost:3001/api/thoughts/:thoughtId/reactions`
    - Params:
        - `reactionBody` - The text of the reaction.
        - `username` - The username of the user that created the reaction.
- DELETE a reaction: `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

## Walkthrough Video

Here is a walkthrough video showing the API routes being tested in Insomnia:

[Walkthrough Video]()

## Credits
### Resources

The following resources and individuals made invaluable contributions to the project:

#### Class Resources

Code from the Wanderlist project was used as a starting point for this project.  This project was created by the following individuals:

- Olena Pashchenko - [UserOlena](https://github.com/UserOlena)
- Jennifer Rytikoff - [jenryt](https://github.com/jenryt)
- Bandhavi Bendi - [bbandhu](https://github.com/bbandhu)
- Kevin Small - [kevrev](https://github.com/Kevrev)
- Joshua Dempe - [JDempe](https://github.com/JDempe)

## Contact
### Collaborators
- Joshua Dempe - [JDempe](https://github.com/JDempe)

## License

This project is open source and available under the [MIT](./LICENSE) license.

## How to Contribute

Looking to contribute?  Find out how at https://github.com/JDempe/bootcamp-18-social-network-api.