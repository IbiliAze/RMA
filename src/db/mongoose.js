///////////////////////////////////////////////////////////////////////////////////MODULES
const mongoose = require('mongoose');
const chalk = require('chalk');
//////////////////////////////////////////////////////////////////////////////////////////

const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_NAME || 'RMA';
const connectionURL = `mongodb://${url}:${process.env.MONGODB_PORT}/${dbName}`;

console.log(`Connecting to ${connectionURL}`);
mongoose.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log(`Connection error: ${error}`);
    }
    console.log(
      `${chalk.bold.green('Successful')} MongoDB Connection: [ ${chalk.bold.blue(dbName)} ] at [ ${chalk.bold.blue(
        url
      )}:${chalk.bold.blue(process.env.MONGODB_PORT)} ]`
    );
  }
);
