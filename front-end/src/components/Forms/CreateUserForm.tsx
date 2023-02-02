import React from "react";
import createUser from "../../services/createUser";
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

  const response = await createUser(formatedData);
  console.log(response);
}

const CreateUserForm = () => {
  return (
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
  );
};

export default CreateUserForm;
