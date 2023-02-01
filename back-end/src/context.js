import jwt from "jsonwebtoken";
import encryptPassword from "./Helpers/encryptPassword";
import { AuthenticationError } from "apollo-server";

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

export const checkUserIsLogged = (userId) => {
  if (!userId)
    throw new AuthenticationError(
      "Você precisa estar logado para realizar esta ação!"
    );
};

export const checkUserIsOwner = async (userId, refId) => {
  const { id } = await (await fetchUser(userId)).json();
  if (id !== refId)
    throw new AuthenticationError(
      "Você não pode alterar dados de outro usuário!"
    );
};

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
