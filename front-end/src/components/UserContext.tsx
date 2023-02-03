import React, { ReactNode } from "react";
import useFetch from "../Hooks/useFetch";
import GetUser from "../services/GetUser";

interface UserContextModel {
  userIsLogged: () => boolean;
  user: UserModel;
  setUserIsLogged?: any;
  setUser?: any;
}

interface UserModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
}

const contextInitialState = {
  userIsLogged: () => false,
  user: {
    lastName: "",
    firstName: "",
    userName: "",
    email: "",
  },
};

const userInitialState = {
  lastName: "",
  firstName: "",
  userName: "",
  email: "",
};

export const UserContext =
  React.createContext<UserContextModel>(contextInitialState);

const UserStorage = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState(userInitialState);
  const { request, erro, data } = useFetch();

  function userIsLogged() {
    return false;
    const tokenExist = !!localStorage.getItem("token");
    let boleano = false;

    if (!tokenExist) return false;

    async function teste() {
      await request(GetUser);
      if (erro) {
        setUser(userInitialState);
        boleano = false;
      } else {
        setUser(data);
        boleano = true;
      }
    }

    teste();
    return boleano;
  }

  return (
    <UserContext.Provider value={{ userIsLogged, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
