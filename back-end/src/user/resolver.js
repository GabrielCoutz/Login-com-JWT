import { userIsLogged } from "../context";

const users = async (_, __, { fetchUsers }) => {
  const response = await fetchUsers();
  const json = await response.json();
  return json;
};

const user = async (_, __, { fetchUser, loggedUserId }) => {
  if (!userIsLogged(loggedUserId))
    return {
      message: "Você precisa estar logado para realizar esta ação!",
    };

  const response = await fetchUser(loggedUserId);
  const json = await response.json();
  return json;
};

const createUser = async (_, { data }, { createUser }) => {
  const response = await createUser(data);
  if (response.message) return response;

  const json = await response.json();
  return json;
};

const updateUser = async (_, { data }, { updateUser, loggedUserId }) => {
  if (!userIsLogged(loggedUserId))
    return {
      message: "Você precisa estar logado para realizar esta ação!",
    };

  const response = await updateUser(loggedUserId, data);
  const json = await response.json();
  return json;
};

const deleteUser = async (_, __, { deleteUser, loggedUserId }) => {
  userIsLogged(loggedUserId);

  const response = await deleteUser(loggedUserId);
  if (response.status !== 200)
    return {
      message: "Não foi possível realizar esta ação!",
    };
  return {
    deleted: true,
  };
};

const userNotLoggedResolveFunction = (obj) => {
  if (obj.message) return "UserNotLogged";
  if (obj.userName) return "User";
  return null;
};

export const userResolvers = {
  Query: {
    users,
    user,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
  CreateUserResult: {
    __resolveType: (obj) => {
      if (obj.message) return "EmailAlreadyInUse";
      if (obj.userName) return "User";
      return null;
    },
  },
  GetUserResult: {
    __resolveType: (obj) => {
      if (obj.message) return "UserNotLogged";
      if (obj.userName) return "User";
      return null;
    },
  },
  UpdateUserResult: {
    __resolveType: userNotLoggedResolveFunction,
  },
  DeleteUserResult: {
    __resolveType: (obj) => {
      if (obj.message) return "UserNotExist";
      return "DeleteResponse";
    },
  },
};
