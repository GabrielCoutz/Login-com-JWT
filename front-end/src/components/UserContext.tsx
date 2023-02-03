import React, { ReactNode } from "react";
import GetUser from "../services/GetUser";

interface UserContextModel {
  userIsLogged: boolean;
  user: UserModel | null;
  setUserIsLogged?: any;
  setUser?: any;
}

interface UserModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
}

const initialState = {
  userIsLogged: false,
  user: null,
};

export const UserContext = React.createContext<UserContextModel>(initialState);

const UserStorage = ({ children }: { children: ReactNode }) => {
  const [userIsLogged, setUserIsLogged] = React.useState(false);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const tokenExist = !!localStorage.getItem("token");
    if (!tokenExist) return;

    async function loadUserData() {
      const { data } = await GetUser();
      if (data.user.message) {
        setUserIsLogged(false);
        setUser(null);
      } else {
        setUserIsLogged(true);
        setUser(data.user);
      }
    }

    if (!userIsLogged) loadUserData();
  }, [userIsLogged]);

  return (
    <UserContext.Provider
      value={{ userIsLogged, user, setUser, setUserIsLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
