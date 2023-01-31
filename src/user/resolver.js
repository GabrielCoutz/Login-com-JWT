const users = async (_, __, { fetchUsers }) => {
  return await fetchUsers();
};

const user = async (_, { id }, { fetchUser }) => {
  return await fetchUser(id);
};

const createUser = async (_, { data }, { createUser }) => {
  return createUser(data);
};

const updateUser = async (_, { id, data }, { updateUser }) => {
  return updateUser(id, data);
};

const deleteUser = async (_, { id }, { deleteUser }) => {
  return deleteUser(id);
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
