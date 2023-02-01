import { gql } from "apollo-server";

export const loginTypeDef = gql`
  extend type Mutation {
    login(data: LoginInput!): Login!
  }

  type Login {
    userId: ID!
    token: String!
  }

  input LoginInput {
    userName: String!
    password: String!
  }
`;
