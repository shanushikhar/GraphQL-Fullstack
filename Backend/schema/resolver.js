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
    updateUser: (parent, args) => {
      const { id, updateWebsite } = args.input;
      const user = UserData.find((user) => user.id === +id);
      user.website = updateWebsite;
      return user;
    },
    deleteUser: (parent, args) => {
      const id = args.id;

      const user = UserData.findIndex((user) => user.id === +id);
      UserData.splice(user, 1);

      //   _.remove(UserData, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = resolvers;
