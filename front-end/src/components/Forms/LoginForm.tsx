import { useRouter } from "next/router";
import React from "react";
import LoginUser from "../../services/LoginUser";
import formDataToObject from "../../Utils/formDataToObject";
import Error from "../Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";

const LoginForm = () => {
  const route = useRouter();
  const [erro, setErro] = React.useState([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro([]);

    const inputs = [...e.currentTarget.getElementsByTagName("input")];
    const formData = new FormData();

    inputs.forEach(({ name, value }) => formData.append(name, value));

    const formatedData = formDataToObject(formData);
    const response = await LoginUser(formatedData);

    if (!response.userId) return setErro(response);

    localStorage.setItem("token", response.token);
    route.push("/perfil");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="userName" text="Nome de usuário" />
        <Input id="userName" name="userName" />

        <Label htmlFor="password" text="Senha" />
        <Input id="password" name="password" />

        <button>Entrar</button>
      </Form>
      <Error erro={erro} />
    </>
  );
};

export default LoginForm;
