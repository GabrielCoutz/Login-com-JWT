import jwt from "jsonwebtoken";
import encryptPassword from "./Helpers/encryptPassword";
import { AuthenticationError } from "apollo-server";

const request = (endpoint, options) =>
  fetch(`${process.env.BASE_URL}${endpoint}`, options);

const fetchUsers = () => request("/users/");
const fetchUser = (id) => request(`/users/${id}`);

const checkEmail = async (email) => {
  const response = await fetchUser(`?email=${email}`);
  const json = await response.json();
  if (json.length) return true;
  return false;
};

const createUser = async (data) => {
  const emailAlreadyInUse = await checkEmail(data.email);
  if (emailAlreadyInUse)
    return {
      message: "Email já em uso!",
    };

  const userName = `${data.firstName.split(" ")[0]}.${
    data.lastName.split(" ")[0]
  }`;
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

const updateUser = async (id, data) => {
  if (data.password) {
    data.passwordHash = await encryptPassword(data.password);
    delete data.password;
  }
  return request(`/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const deleteUser = async (id) =>
  request(`/users/${id}`, {
    method: "DELETE",
  });

const authorizeUser = (req) => {
  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_, token] = authorization.split(" ");
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  } catch (error) {
    return "";
  }
};

export const userIsLogged = (userId) => !!userId;

export default ({ req }) => {
  const loggedUserId = authorizeUser(req);
  return {
    fetchUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser,
    loggedUserId,
  };
};
