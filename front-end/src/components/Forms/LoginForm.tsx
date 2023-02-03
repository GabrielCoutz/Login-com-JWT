import { useRouter } from "next/router";
import React from "react";
import LoginUser from "../../services/LoginUser";
import getValues from "../../Utils/getValues";
import Error from "../UiElements/Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";
import FormGroup from "./FormGroup";
import Message from "../UiElements/Message";
import useFetch from "../../Hooks/useFetch";
import Button from "../UiElements/Button";

const LoginForm = () => {
  const route = useRouter();
  const { request, erro, message, loading, token } = useFetch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inputData = getValues(e.currentTarget);
    await request(LoginUser, inputData);

    if (!token) return;

    localStorage.setItem("token", token);
    route.push("/perfil");
  }

  return (
    <>
      {message && <Message message={message} />}
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            autoComplete="username"
            defaultValue="gabriel@gmail.com"
          />
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            autoComplete="current-password"
            defaultValue="gabriel"
          />
        </FormGroup>

        <FormGroup row>
          {erro && <Error erro={erro} />}
          <Button primary disabled={loading}>
            Entrar
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default LoginForm;
