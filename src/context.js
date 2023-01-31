const request = (endpoint, options) =>
  fetch(`${process.env.BASEURL}${endpoint}`, options);

const fetchUsers = async () => {
  return await (await request("/users/")).json();
};

const fetchUser = async (id) => {
  return await (await request(`/users/${id}`)).json();
};

const createUser = async (data) => {
  const userName = `${data.firstName}.${data.lastName}`;
  data.userName = userName;

  const response = await (
    await request(`/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
  return response;
};

const updateUser = async (id, data) => {
  const response = await (
    await request(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
  return response;
};

const deleteUser = async (id) => {
  const response = await (
    await request(`/users/${id}`, {
      method: "DELETE",
    })
  ).json();
  return !!response;
};

export default () => ({
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
});
