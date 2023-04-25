const { gql } = require("apollo-server");

const typeDef = gql`
  type geo {
    lat: String!
    lng: String!
  }

  type address {
    street: String!
    suite: String!
    city: String
    zipcode: String
    geo: geo
  }

  type company {
    name: String!
    catchPhrase: String!
    bs: String
  }

  type user {
    id: ID!
    name: String!
    age: Int!
    username: String!
    email: String!
    phone: String
    website: String!
    address: address
    company: company
  }

  type Query {
    users: [user!]!
  }
`;

module.exports = typeDef;
