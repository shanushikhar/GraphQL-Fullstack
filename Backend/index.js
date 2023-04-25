const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/type-def");
const resolvers = require("./schema/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is running on :- ${url}`);
});

/**
 getting the data like => 
 1> query all users
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

2> query all users
query getUsers {
  users {
    id
    name
    age 
    website
    friends {
      id
      age
      email
      website
      username
    }
  }
}

3> query by id 
query getUser($userId: ID!){
  user(id: $userId) {
    id
    age
    name
    email
  }
}

in variable => 
{
  "userId": 4
}

4> query by name
query user($name: String!){
  userByName(name: $name) {
    age
    name
    address {
      geo {
        lat
        lng
      }
    }
  }
}
in variable => 
{
  "name": "Ervin Howell"
}

5> fetching data form another table
query user($name: String!){
  userByName(name: $name) {
    age
    name
    favoritesMovie {
      name
      released
      yor
    }
  }
}
in variable => 
{
  "name": "Ervin Howell"
}
 */
