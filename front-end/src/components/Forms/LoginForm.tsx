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

const LoginForm = () => {
  const route = useRouter();
  const [erro, setErro] = React.useState(null);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const createdAccountSuccess = !!localStorage.getItem(
      "createdAccountSuccess"
    );
    if (createdAccountSuccess) {
      setMessage("Conta criada com sucesso!");
      localStorage.removeItem("createdAccountSuccess");
    }
  });

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
      <Message message={message} />
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
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
          <button className="btn primary">Entrar</button>
        </FormGroup>
      </Form>
    </>
  );
};

export default LoginForm;
