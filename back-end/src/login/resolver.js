import comparePassword from "../Helpers/comparePassword";
import generateToken from "../Helpers/generateToken";

const userExists = (user) => !!user.length;

const login = async (_, { data }, { fetchUser }) => {
  const { email, password } = data;

  const response = await fetchUser(`?email=${email}`);
  const user = await response.json();
  if (!userExists(user))
    return {
      message: "Credenciais Incorretas!",
    };

  const [{ passwordHash, id }] = user;

  const passwordIsValid = await comparePassword(password, passwordHash);
  if (!passwordIsValid)
    return {
      message: "Credenciais Incorretas!",
    };

  const token = generateToken({ userId: id });
  return { token };
};

export const loginResolvers = {
  Mutation: {
    login,
  },
  LoginResult: {
    __resolveType: (obj) => {
      if (obj.message) return "LoginError";
      if (obj.token) return "Login";
      return null;
    },
  },
};
