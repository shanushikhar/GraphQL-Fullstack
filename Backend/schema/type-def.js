const { gql } = require("apollo-server");

const typeDef = gql`
  type user {
    id: ID!
    name: String!
    age: Int!
    username: String!
    email: String!
    phone: String
    website: String!
  }

  type Query {
    users: [user]!
  }
`;

module.exports = typeDef;
