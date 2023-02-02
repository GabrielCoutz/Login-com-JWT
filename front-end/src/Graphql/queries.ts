import { gql } from "graphql-request";

export const GET_USER = gql`
  query GET_USER {
    user {
      ... on User {
        email
        firstName
        lastName
        userName
      }
      ... on UserNotLogged {
        message
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CREATE_USER($data: CreateUserInput!) {
    createUser(data: $data) {
      ... on User {
        userName
      }

      ... on EmailAlreadyInUse {
        message
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER($data: UpdateUserInput!) {
    updateUser(data: $data) {
      ... on User {
        email
        firstName
        lastName
        userName
      }

      ... on UserNotLogged {
        message
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DELETE_USER {
    deleteUser {
      ... on DeleteResponse {
        deleted
      }
      ... on UserNotExist {
        message
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($data: LoginInput!) {
    login(data: $data) {
      ... on Login {
        token
      }
      ... on LoginError {
        message
      }
    }
  }
`;
