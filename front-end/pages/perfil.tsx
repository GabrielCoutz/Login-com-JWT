import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Form from "../src/components/Form";
import Input from "../src/components/Input";
import Label from "../src/components/Label";
import GetUser from "../src/services/GetUser";
import updateUser from "../src/services/updateUser";
import getValues from "../src/Utils/getValues";

interface DataModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
}

function logout() {
  localStorage.removeItem("token");
}

const perfil = () => {
  const { push } = useRouter();
  const [data, setData] = React.useState<DataModel>();

  React.useEffect(() => {
    const userIsLogged = !!localStorage.getItem("token");
    if (!userIsLogged) push("/");

    async function loadData() {
      const response = await GetUser();
      if (!response.data) push("/");
      else setData(response.data.user);
    }
    loadData();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formatedData = getValues(e.currentTarget);
    const response = await updateUser(formatedData);
    console.log(response);
  }

  if (data)
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="userName">Nome de usuário</Label>
            <Input id="userName" name="userName" value={data?.userName} />
          </div>
          <div>
            <Label htmlFor="firstName">Nome</Label>
            <Input id="firstName" name="firstName" value={data?.firstName} />
          </div>
          <div>
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" name="lastName" value={data?.lastName} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" value={data?.email} />
          </div>
          <button>Atualizar dados</button>
        </Form>
        <Link href="/" onClick={logout}>
          Sair
        </Link>
      </>
    );
  return null;
};

export default perfil;
