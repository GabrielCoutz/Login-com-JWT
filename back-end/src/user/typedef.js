import { gql } from "apollo-server";

export const userTypeDef = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): CreateUserResult!
    updateUser(data: UpdateUserInput!): User!
    deleteUser: Boolean!
  }

  union CreateUserResult = EmailAlreadyInUse | User

  type EmailAlreadyInUse {
    message: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String
    email: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
  }
`;