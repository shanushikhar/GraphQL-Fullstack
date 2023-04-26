import React, { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const FETCH_USER = gql`
  query getUsers {
    users {
      id
      name
      age
      email
      phone
    }
  }
`;

const FETCH_USER_BY_NAME = gql`
  query user($name: String!) {
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
`;

export default function FetchData() {
  const [userdata, setuserData] = useState("");
  const { data, loading, error } = useQuery(FETCH_USER);
  const [fetchuser, { data: userSpecificData, error: userError }] =
    useLazyQuery(FETCH_USER_BY_NAME);

  if (error) <p>Something went wrong</p>;
  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      {data &&
        data.users.map((user) => {
          return (
            <div key={user.id}>
              <h2>user id is :- {user.id}</h2>
              <h2>user name is :- {user.name}</h2>
              <h2>user age is :- {user.age}</h2>
              <h2>user email is :- {user.email}</h2>
              <h2>user phone is :- {user.phone}</h2>
              <hr />
            </div>
          );
        })}

      <input
        placeholder="search user"
        type="text"
        onChange={(e) => setuserData(e.target.value)}
      />
      <button
        onClick={() => {
          fetchuser({
            variables: {
              name: userdata,
            },
          });
        }}
      >
        Get User data
      </button>

      {userSpecificData && (
        <div>
          <h1>{userSpecificData.userByName.age}</h1>
          <h1>{userSpecificData.userByName.name}</h1>
        </div>
      )}
      {userError && <p>Something went wrong..</p>}
    </>
  );
}
