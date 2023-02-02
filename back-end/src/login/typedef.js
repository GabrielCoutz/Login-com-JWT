import { gql } from "apollo-server";

export const loginTypeDef = gql`
  extend type Mutation {
    login(data: LoginInput!): LoginResult!
  }

  union LoginResult = LoginError | Login

  type LoginError {
    message: String!
  }

  type Login {
    token: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;
