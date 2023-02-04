import { useRouter } from "next/router";
import React from "react";
import Error from "../src/components/UiElements/Error";
import Form from "../src/components/Form";
import FormGroup from "../src/components/Forms/FormGroup";
import Input from "../src/components/Input";
import Label from "../src/components/Label";
import Message from "../src/components/UiElements/Message";
import getValues from "../src/Utils/getValues";
import { UserContext } from "../src/components/UserContext";
import useFetch, { responseHasData } from "../src/Hooks/useFetch";
import Button from "../src/components/UiElements/Button";
import Dangerzone from "../src/components/Dangerzone";

const perfil = () => {
  const { push } = useRouter();
  const { request, erro, message, loading, setMessage } = useFetch();
  const { user, setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) push("/login");

    async function loadData() {
      const data = await request("/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!data) push("/login");
      setUser(data);
    }

    loadData();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const formatedData = getValues(e.currentTarget);
    const newData = await request("/api/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formatedData),
    });

    if (!newData || !responseHasData(newData)) return;
    setUser(newData);

    setMessage("Dados atualizados!");
  }

  if (user)
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">Nome</Label>
            <Input id="firstName" name="firstName" value={user.firstName} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" name="lastName" value={user.lastName} />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="userName">Nome de usuário</Label>
            <Input id="userName" name="userName" value={user.userName} />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={user.email}
              autoComplete="username"
            />
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </FormGroup>

          <FormGroup row>
            {erro && <Error erro={erro} />}
            {message && <Message message={message} />}
            <Button primary disabled={loading}>
              Atualizar dados
            </Button>
          </FormGroup>
        </Form>
        <Dangerzone />
      </>
    );
  return null;
};

export default perfil;
