import { useRouter } from "next/router";
import React from "react";
import Form from "../src/components/Form";
import Input from "../src/components/Input";
import Label from "../src/components/Label";
import GetUser from "../src/services/GetUser";
import updateUser from "../src/services/updateUser";
import formDataToObject from "../src/Utils/formDataToObject";
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
      <Form onSubmit={handleSubmit}>
        <div>
          <Label text="Nome de usuário" htmlFor="userName" />
          <Input id="userName" name="userName" value={data?.userName} />
        </div>
        <div>
          <Label text="Nome" htmlFor="firstName" />
          <Input id="firstName" name="firstName" value={data?.firstName} />
        </div>
        <div>
          <Label text="Sobrenome" htmlFor="lastName" />
          <Input id="lastName" name="lastName" value={data?.lastName} />
        </div>
        <div>
          <Label text="Email" htmlFor="email" />
          <Input id="email" name="email" value={data?.email} />
        </div>
        <button>Atualizar dados</button>
      </Form>
    );
  return null;
};

export default perfil;
