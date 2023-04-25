const data = require("../Data/data");

const resolvers = {
  Query: {
    users() {
      return data;
    },
  },
};

module.exports = resolvers;
