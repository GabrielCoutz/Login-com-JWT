const request = (endpoint) => fetch(`${process.env.BASEURL}${endpoint}`);

const fetchUsers = async () => {
  return await (await request("/users/")).json();
};

const fetchUser = async (id) => {
  return await (await request(`/users/${id}`)).json();
};

const context = () => {
  return { fetchUsers, fetchUser };
};

export default context;
