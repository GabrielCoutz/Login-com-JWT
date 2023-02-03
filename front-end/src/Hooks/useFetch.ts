import React from "react";
import { DataModel } from "../Interfaces/global";

interface AlertModel {
  message: string;
}

interface TokenModel {
  token: string;
}

interface UserModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
}

interface RequestModel {
  response: UserModel | TokenModel;
}

const responseHasErro = (response: unknown): response is AlertModel =>
  !!(response && typeof response === "object" && "message" in response);

const responseHasData = (response: unknown): response is UserModel =>
  !!(
    response &&
    typeof response === "object" &&
    ("lastName" in response ||
      "name" in response ||
      "email" in response ||
      "password" in response)
  );

const responseHasToken = (response: unknown): response is TokenModel =>
  !!(response && typeof response === "object" && "token" in response);

const useFetch = () => {
  const [message, setMessage] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [data, setData] = React.useState<UserModel | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState("");

  const request = async (fetchFunction: Function, payload: DataModel = {}) => {
    setLoading(true);
    setMessage("");

    const response = await fetchFunction(payload);

    if (responseHasErro(response)) {
      setErro(response.message);
      console.log(erro);
      // setData(null);
    }

    // else if (responseHasData(response)) {
    //   setData(response);
    //   setErro("");
    //   setToken("");
    //   setMessage("");
    // } else if (responseHasToken(response)) {
    //   setToken(response.token);
    // }

    setLoading(false);
  };

  return {
    message,
    erro,
    data,
    request,
    loading,
    token,
    setMessage,
  };
};

export default useFetch;
