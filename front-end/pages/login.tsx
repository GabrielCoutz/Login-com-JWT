import { useRouter } from "next/router";
import React from "react";
import LoginForm from "../src/components/Forms/LoginForm";
import useUserContext from "../src/Hooks/useUserContext";

const login = () => {
  const { userIsLogged } = useUserContext();
  const { push } = useRouter();

  if (userIsLogged) push("/perfil");
  else return <LoginForm />;
};

export default login;
