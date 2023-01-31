import comparePassword from "../Helpers/comparePassword";
import generateToken from "../Helpers/generateToken";
import { AuthenticationError } from "apollo-server";

const checkIfUserExists = (user) => {
  if (!user.length) throw new AuthenticationError("Credenciais incorretas!");
};

const login = async (_, { data }, { fetchUser }) => {
  const { userName, password } = data;

  const response = await fetchUser(`?userName=${userName}`);
  const user = await response.json();

  checkIfUserExists(user);

  const [{ passwordHash }] = user;

  const passwordIsValid = await comparePassword(password, passwordHash);

  if (passwordIsValid) {
    const token = generateToken(userName);
    return { userName, token };
  } else throw new AuthenticationError("Credenciais incorretas!");
};

export const loginResolvers = {
  Mutation: {
    login,
  },
};
