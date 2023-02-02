import { useRouter } from "next/router";
import React from "react";
import LoginUser from "../../services/LoginUser";
import getValues from "../../Utils/getValues";
import Error from "../Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";

const LoginForm = () => {
  const route = useRouter();
  const [erro, setErro] = React.useState(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);

    const inputData = getValues(e.currentTarget);
    const response = await LoginUser(inputData);

    if (response.message) return setErro(response);

    localStorage.setItem("token", response.token);
    route.push("/perfil");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" />

        <Label htmlFor="password">Senha</Label>
        <Input id="password" name="password" />

        <button>Entrar</button>
      </Form>
      <Error erro={erro} />
    </>
  );
};

export default LoginForm;
