import { gql } from "apollo-server";

export const loginTypeDef = gql`
  extend type Mutation {
    login(data: LoginInput!): Login!
  }

  type Login {
    token: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;
