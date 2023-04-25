const { UserData, Movies } = require("../Data/data");
const _ = require("lodash");

const resolvers = {
  Query: {
    users() {
      return UserData;
    },
    user: (parent, args) => {
      const user = _.find(UserData, { id: Number(args.id) });
      return user;
    },
    userByName: (parent, args) => {
      const user = _.find(UserData, { name: args.name });
      return user;
    },
  },
  User: {
    favoritesMovie: () => {
      const favMovie = _.filter(
        Movies,
        (movie) => movie.yor >= 2012 && movie.yor <= 2023
      );
      return favMovie;
    },
  },
};

module.exports = resolvers;
