///////////////////////////////////////////////////////////////////////////////////MODULES
const mongoose = require('mongoose');
const chalk = require('chalk');
//////////////////////////////////////////////////////////////////////////////////////////

const connectionURL = process.env.MONGODB_URL;

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
    console.log(`${chalk.bold.green('Successful')} MongoDB Connection: at [ ${chalk.bold.blue(connectionURL)} ]`);
  }
);
