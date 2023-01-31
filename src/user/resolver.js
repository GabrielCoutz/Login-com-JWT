const users = async (_, __, { fetchUsers }) => {
  return await fetchUsers("/users");
};

export const userResolvers = {
  Query: {
    users,
  },
};
