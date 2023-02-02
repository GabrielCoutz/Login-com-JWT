import { checkUserIsLogged, checkUserIsOwner } from "../context";

const users = async (_, __, { fetchUsers }) => {
  const response = await fetchUsers();
  const json = await response.json();
  return json;
};

const user = async (_, __, { fetchUser, loggedUserId }) => {
  checkUserIsLogged(loggedUserId);
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
  checkUserIsLogged(loggedUserId);

  const response = await updateUser(loggedUserId, data);
  const json = await response.json();
  return json;
};

const deleteUser = async (_, __, { deleteUser, loggedUserId }) => {
  checkUserIsLogged(loggedUserId);

  const response = await deleteUser(loggedUserId);
  const json = await response.json();
  return !!json;
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
};
