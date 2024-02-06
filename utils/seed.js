const connection = require('../config/connection');
const seedData = require('../utils/data');

connection.once('open', async () => {
  try {
    await seedData();
    console.log('Data generated successfully!');
    connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
    connection.close();
  }
});

connection.on('error', (error) => {
  console.error('Error connecting to the database:', error);
  process.exit(1);
});