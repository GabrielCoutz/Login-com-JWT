import encryptPassword from "./Helpers/encryptPassword";

const request = (endpoint, options) =>
  fetch(`${process.env.BASE_URL}${endpoint}`, options);

const fetchUsers = () => request("/users/");
const fetchUser = (id) => request(`/users/${id}`);

const createUser = async (data) => {
  const userName = `${data.firstName}.${data.lastName}`;
  data.userName = userName;
  data.passwordHash = await encryptPassword(data.password);
  delete data.password;

  return request(`/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const updateUser = (id, data) =>
  request(`/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

const deleteUser = async (id) =>
  request(`/users/${id}`, {
    method: "DELETE",
  });

export default () => ({
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
});
