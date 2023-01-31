import { gql } from "apollo-server";

export const userTypeDef = gql`
  extend type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
  }
`;
