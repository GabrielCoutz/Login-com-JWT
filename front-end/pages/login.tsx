import { useRouter } from "next/router";
import React from "react";
import LoginForm from "../src/components/Forms/LoginForm";
import useFetch from "../src/Hooks/useFetch";

const login = () => {
  const { request } = useFetch();
  const { push } = useRouter();

  async function autoLogin(token: string) {
    const data = await request("/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) push("/perfil");
  }

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) autoLogin(token);
  }, []);

  return <LoginForm />;
};

export default login;
