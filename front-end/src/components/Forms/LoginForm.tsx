import React from "react";
import LoginUser from "../../services/LoginUser";
import formDataToObject from "../../Utils/formDataToObject";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const inputs = [...e.currentTarget.getElementsByTagName("input")];
  const formData = new FormData();

  inputs.forEach(({ name, value }) => formData.append(name, value));

  const formatedData = formDataToObject(formData);
  console.log(await LoginUser(formatedData));
}

const LoginForm = () => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="userName" text="Nome de usuário" />
      <Input id="userName" name="userName" />

      <Label htmlFor="password" text="Senha" />
      <Input id="password" name="password" />

      <button>Entrar</button>
    </Form>
  );
};

export default LoginForm;
