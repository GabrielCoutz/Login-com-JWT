import { checkUserIsLogged, checkUserIsOwner } from "../context";

const users = async (_, __, { fetchUsers }) => {
  const response = await fetchUsers();
  const json = await response.json();
  return json;
};

const user = async (_, { id }, { fetchUser }) => {
  const response = await fetchUser(id);
  const json = await response.json();
  return json;
};

const createUser = async (_, { data }, { createUser }) => {
  const response = await createUser(data);
  const json = await response.json();
  return json;
};

const updateUser = async (_, { id, data }, { updateUser, loggedUserId }) => {
  checkUserIsLogged(loggedUserId);
  await checkUserIsOwner(id, loggedUserId);

  const response = await updateUser(id, data);
  const json = await response.json();
  return json;
};

const deleteUser = async (_, { id }, { deleteUser, loggedUserId }) => {
  checkUserIsLogged(loggedUserId);
  await checkUserIsOwner(id, loggedUserId);

  const response = await deleteUser(id);
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
};
