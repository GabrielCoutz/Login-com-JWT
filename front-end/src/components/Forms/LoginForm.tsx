import { useRouter } from "next/router";
import React from "react";
import getValues from "../../Utils/getValues";
import Error from "../UiElements/Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";
import FormGroup from "./FormGroup";
import Message from "../UiElements/Message";
import useFetch, { responseHasToken } from "../../Hooks/useFetch";
import Button from "../UiElements/Button";

const LoginForm = () => {
  const route = useRouter();
  const { request, erro, message, loading } = useFetch();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inputData = getValues(e.currentTarget);
    const response = await request("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });

    if (!response || !responseHasToken(response)) return;

    localStorage.setItem("token", response.token);
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
            type="email"
            autoComplete="username"
            defaultValue="gabrieldsadsa@gmail.com"
            required
          />
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            defaultValue="gabriel"
            required
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
