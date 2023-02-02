import { gql } from "graphql-request";

export const GET_USER = gql`
  query GET_USER {
    user {
      firstName
      lastName
      userName
      email
    }
  }
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      firstName
      lastName
      userName
    }
  }
`;

export const CREATE_USER = gql`
  mutation CREATE_USER($data: CreateUserInput!) {
    createUser(data: $data) {
      userName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER($data: UpdateUserInput!) {
    updateUser(data: $data) {
      firstName
      lastName
      userName
      email
    }
  }
`;
