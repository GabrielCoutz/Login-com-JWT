const users = async (_, __, { fetchUsers }) => {
  return await fetchUsers();
};

const user = async (_, { id }, { fetchUser }) => {
  return await fetchUser(id);
};

export const userResolvers = {
  Query: {
    users,
    user,
  },
};
