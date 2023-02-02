import { useRouter } from "next/router";
import React from "react";
import createUser from "../../services/createUser";
import getValues from "../../Utils/getValues";
import Error from "../Error";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";

const CreateUserForm = () => {
  const [erro, setErro] = React.useState({});
  const { push } = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro({});

    const inputData = getValues(e.currentTarget);
    const response = await createUser(inputData);

    if (response.message) setErro(response);
    else push("/login");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName" text="Nome" />
        <Input id="firstName" name="firstName" />

        <Label htmlFor="lastName" text="Sobrenome" />
        <Input id="lastName" name="lastName" />

        <Label htmlFor="email" text="Email" />
        <Input id="email" name="email" />

        <Label htmlFor="password" text="Senha" />
        <Input id="password" name="password" />

        <button>Enviar</button>
      </Form>
      <Error erro={erro} />
    </>
  );
};

export default CreateUserForm;
