import { gql } from "apollo-server";

export const userTypeDef = gql`
  extend type Query {
    user: GetUserResult!
    users: [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): CreateUserResult!
    updateUser(data: UpdateUserInput!): UpdateUserResult!
    deleteUser: DeleteUserResult!
  }

  union DeleteUserResult = UserNotExist | DeleteResponse
  union UpdateUserResult = UserNotLogged | User
  union CreateUserResult = EmailAlreadyInUse | User
  union GetUserResult = UserNotLogged | User

  type DeleteResponse {
    deleted: Boolean!
  }

  type UserNotExist {
    message: String!
  }

  type UserNotLogged {
    message: String!
  }

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
