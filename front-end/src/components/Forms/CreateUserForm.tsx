import { useRouter } from "next/router";
import React from "react";
import createUser from "../../services/createUser";
import getValues from "../../Utils/getValues";
import Error from "../UiElements/Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";
import FormGroup from "./FormGroup";

const CreateUserForm = () => {
  const [erro, setErro] = React.useState({});
  const { push } = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro({});

    const inputData = getValues(e.currentTarget);
    const response = await createUser(inputData);

    if (response.message) setErro(response);
    else {
      localStorage.setItem("createdAccountSuccess", "1");
      push("/login");
    }
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
            required
            type="email"
            placeholder="exemplo@gmail.com"
            autoComplete="username"
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
          />
        </FormGroup>

        <FormGroup row>
          <Error erro={erro} />
          <button className="btn primary">Cadastrar</button>
        </FormGroup>
      </Form>
    </>
  );
};

export default CreateUserForm;
