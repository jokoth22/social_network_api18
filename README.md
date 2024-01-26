# NoSQL Challenge: Social Network API

## Description
"NoSQL Challenge: Social Network API" is a robust backend API for a social media startup, designed to handle large volumes of unstructured data using a NoSQL database. Built with MongoDB, Express.js, and Mongoose ODM, this API facilitates social interactions such as sharing thoughts, reacting to friends' thoughts, and managing friend lists.

## User Story
```
AS A social media startup,
I WANT an API for my social network that uses a NoSQL database,
SO THAT my website can handle large amounts of unstructured data.
```

## Acceptance Criteria
- Server starts and Mongoose models are synced with MongoDB upon application invocation.
- GET routes for users and thoughts return data in formatted JSON.
- POST, PUT, and DELETE routes for users and thoughts are functional.
- Ability to create and delete reactions to thoughts and manage user friend lists.

## Installation
1. Clone the repository.
2. Install MongoDB on your local machine.
3. Run `npm install` to install the required dependencies.


## Usage
- Start the server with `npm start`.
- Use a tool like Insomnia or Postman to test the API routes.
- Refer to the 'API Routes' section for detailed endpoint information.

## Models
### User
- username: Unique, Trimmed
- email: Unique, must be a valid email
- thoughts: Array of Thought model _id values
- friends: Array of User model _id values

### Thought
- thoughtText: 1-280 characters
- createdAt: Timestamp with custom getter
- username: Creator's username
- reactions: Array of Reaction subdocuments

### Reaction (Subdocument Schema)
- reactionId: ObjectId
- reactionBody: String, max 280 chars
- username: String
- createdAt: Timestamp with custom getter

## API Routes
### /api/users
- GET all users
- GET, POST, PUT, DELETE a single user
- POST, DELETE friends

### /api/thoughts
- GET all thoughts
- GET, POST, PUT, DELETE a single thought

### /api/thoughts/:thoughtId/reactions
- POST, DELETE reactions

## Walkthrough Video
[Add link to the walkthrough video demonstrating the API functionality]

## Contributing
Contributions to this project are welcome. Please ensure to update tests as appropriate.

## License
[Specify the type of license, if applicable]

---

Feel free to modify this template to suit your project's specific requirements or let me know if there are any additional sections or details you would like included.
