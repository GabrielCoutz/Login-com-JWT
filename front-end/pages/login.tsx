import { useRouter } from "next/router";
import React from "react";
import LoginForm from "../src/components/Forms/LoginForm";
import useFetch from "../src/Hooks/useFetch";
import GetUser from "../src/services/GetUser";

const login = () => {
  const { request, erro, data } = useFetch();
  const { push } = useRouter();

  async function autoLogin() {
    await request(GetUser);
    console.log(erro, data);

    // if (data) push("/perfil");
  }

  React.useEffect(() => {
    const tokenExist = !!localStorage.getItem("token");
    if (!tokenExist) return;

    autoLogin();
  }, []);

  return <LoginForm />;
};

export default login;
