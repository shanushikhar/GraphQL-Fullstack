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
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserData[UserData.length - 1].id;
      user.id = lastId + 1;
      UserData.push(user);
      return user;
    },
  },
};

module.exports = resolvers;
