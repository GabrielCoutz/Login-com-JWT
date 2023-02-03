import { useRouter } from "next/router";
import React from "react";
import getValues from "../../Utils/getValues";
import Error from "../UiElements/Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";
import FormGroup from "./FormGroup";
import useFetch from "../../Hooks/useFetch";
import Button from "../UiElements/Button";

const CreateUserForm = () => {
  const { request, erro, loading } = useFetch();
  const { push } = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inputData = getValues(e.currentTarget);
    const response = await request("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });

    if (!response) return;

    push("/login");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">Nome</Label>
          <Input id="firstName" name="firstName" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input id="lastName" name="lastName" required />
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@gmail.com"
            autoComplete="username"
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
            required
          />
        </FormGroup>

        <FormGroup row>
          {erro && <Error erro={erro} />}
          <Button primary disabled={loading}>
            Cadastrar
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default CreateUserForm;
