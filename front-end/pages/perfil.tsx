import { useRouter } from "next/router";
import React from "react";
import GetUser from "../src/services/GetUser";

interface UserDataModel {
  token: string;
  userId: string;
}

const perfil = () => {
  const { push } = useRouter();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function teste() {
      const a = await GetUser();
      console.log(a);
    }
    teste();
  }, []);

  return <div>perfil</div>;
};

export default perfil;
