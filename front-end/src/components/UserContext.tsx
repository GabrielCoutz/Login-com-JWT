import React, { ReactNode } from "react";

interface UserContextModel {
  user: UserModel | null;
  setUser?: any;
}

interface UserModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
}

const contextInitialState = {
  user: null,
};

export const UserContext =
  React.createContext<UserContextModel>(contextInitialState);

const UserStorage = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
