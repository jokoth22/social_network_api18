const connection = require('../config/connection');
const { User, Thought } = require('../models');
const dateFormat = require ('./dateFormat');
const { getRandomFriends, getThoughts } = require('./test');
const { faker } = require('@faker-js/faker');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }


  // Create empty array to hold the users
  const users = [];
  const friends = [];

  // Loop 20 times -- add users to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random thought objects using a helper function that we imported from ./dataFormat
    const thoughts = getThoughts();
    const userName = faker.internet.userName();
    const email= faker.internet.email();
   // const friends= getRandomFriends();
   // const date= faker.date.past();
    // //loop that creates thoughts --> objectID
    // for (let k=0; k<20; k++){

    //   thoughts.push({
    //     thoughtText: thoughts,
    //     createdAt: Date.now,
    //     username: userName,
    //   })
    // }
    users.push({
      userName,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'I like eggs!',
    createdAt: 11/22/20,
    username: users,
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
