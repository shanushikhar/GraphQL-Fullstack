const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/type-def");
const resolvers = require("./schema/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is running on :- ${url}`);
});

/**
 getting the data like => 
 query getUsers {
  users {
    id
    name
    age
    email
    phone
    __typename
    company {
      name
      catchPhrase
      __typename
    }
    address {
      city
      street
      zipcode
      suite
      __typename
      geo {
        lat
        lng
        __typename
      }
    }
    website
  }
}

 */
