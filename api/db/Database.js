const mongoose = require('mongoose');
let instance = null;

class Database {
  constructor() {
    if (!instance) {
      instance = this;
      this.mongoConnection = null;
    }
    return instance;
  }

  async connect(options) {
    try {
      if (this.mongoConnection) {
        console.log("Already connected to database");
        return;
      }
      
      console.log("Connecting to database...");
      this.mongoConnection = await mongoose.connect(options.CONNECTION_STRING);
      console.log("Database connected successfully");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}

module.exports = Database;