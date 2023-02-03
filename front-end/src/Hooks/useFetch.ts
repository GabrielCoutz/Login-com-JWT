import React from "react";
import { DataModel } from "../Interfaces/global";

interface AlertModel {
  message: string;
}

interface UserModel {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
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

const responseHasToken = (response: unknown): response is "string" =>
  !!(response && typeof response === "object" && "token" in response);

const dataInitialState = {
  lastName: "",
  firstName: "",
  userName: "",
  email: "",
};

const useFetch = () => {
  const [message, setMessage] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [data, setData] = React.useState<UserModel>(dataInitialState);
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState("");

  async function request(fetchFunction: Function, payload: DataModel = {}) {
    setLoading(true);
    setData(dataInitialState);
    setErro("");
    setToken("");
    setMessage("");

    const response = await fetchFunction(payload);
    console.log(response);

    if (responseHasErro(response)) {
      setErro(response.message);
    } else if (responseHasData(response)) {
      setData(response);
    } else if (responseHasToken(response)) {
      setToken(response);
    }

    setLoading(false);
  }
  console.log(loading);

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
