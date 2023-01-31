import { gql } from "apollo-server";

export const userTypeDef = gql`
  extend type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
  }
`;
