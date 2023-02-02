import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Error from "../src/components/Error";
import Form from "../src/components/Form";
import FormGroup from "../src/components/Forms/FormGroup";
import Input from "../src/components/Input";
import Label from "../src/components/Label";
import LogoutButton from "../src/components/LogoutButton";
import Message from "../src/components/Message";
import GetUser from "../src/services/GetUser";
import updateUser from "../src/services/updateUser";
import getValues from "../src/Utils/getValues";

interface DataModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
}

const perfil = () => {
  const { push } = useRouter();
  const [data, setData] = React.useState<DataModel>();
  const [message, setMessage] = React.useState("");
  const [erro, setErro] = React.useState(null);

  React.useEffect(() => {
    const userIsLogged = !!localStorage.getItem("token");
    if (!userIsLogged) push("/");

    async function loadData() {
      const { data } = await GetUser();
      if (data.user.message) push("/");
      else setData(data.user);
    }
    loadData();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    setMessage("");

    const formatedData = getValues(e.currentTarget);
    const response = await updateUser(formatedData);

    if (!response.userName) setErro(response);
    else {
      setData(response);
      setMessage("Dados atualizados!");
    }
  }

  if (data)
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">Nome</Label>
            <Input id="firstName" name="firstName" value={data?.firstName} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" name="lastName" value={data?.lastName} />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="userName">Nome de usuário</Label>
            <Input id="userName" name="userName" value={data?.userName} />
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={data?.email}
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
            <Error erro={erro} />
            <Message message={message} />
            <button className="btn primary">Atualizar dados</button>
          </FormGroup>
        </Form>
        <LogoutButton />
      </>
    );
  return null;
};

export default perfil;
