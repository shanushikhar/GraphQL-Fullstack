const { gql } = require("apollo-server");

const typeDef = gql`
  type Geo {
    lat: String!
    lng: String!
  }

  type Address {
    street: String!
    suite: String!
    city: String
    zipcode: String
    geo: Geo
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    username: Username!
    email: String!
    phone: String
    website: String
    address: Address
    company: Company
    friends: [User]
    favoritesMovie: [Movies]!
  }

  type Movies {
    id: ID!
    name: String!
    released: Boolean!
    yor: Int
  }

  enum Username {
    Bret
    Antonette
    Samantha
    Karianne
    Kamren
    Leopoldo_Corkery
    Elwyn_Skiles
    Maxime_Nienow
    Delphine
    Moriah_Stanton
  }

  input UserInput {
    name: String!
    age: Int!
    username: Username! = Delphine
  }

  input Updateuser {
    id: ID!
    updateWebsite: String!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(input: Updateuser!): User!
    deleteUser(id: ID!): User
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    userByName(name: String!): User!
  }
`;

module.exports = typeDef;
