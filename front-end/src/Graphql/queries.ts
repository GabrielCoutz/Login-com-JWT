import { gql } from "graphql-request";

export const GET_USER = gql`
  query GET_USER($userId: ID!) {
    user(id: $userId) {
      firstName
      id
      lastName
      userName
    }
  }
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      firstName
      lastName
      userName
    }
  }
`;

export const CREATE_USER = gql`
  mutation CREATE_USER($data: CreateUserInput!) {
    createUser(data: $data) {
      firstName
      id
      lastName
      userName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($data: LoginInput!) {
    login(data: $data) {
      userId
      token
    }
  }
`;
