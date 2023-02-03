import React from "react";

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

const responseHasErro = (response: unknown): response is AlertModel =>
  !!(response && typeof response === "object" && "message" in response);

export const responseHasData = (response: unknown): response is UserModel =>
  !!(
    response &&
    typeof response === "object" &&
    ("lastName" in response ||
      "name" in response ||
      "email" in response ||
      "password" in response)
  );

export const responseHasToken = (response: unknown): response is TokenModel =>
  !!(response && typeof response === "object" && "token" in response);

type endpoints = "/api/user" | "/api/login";

const useFetch = () => {
  const [message, setMessage] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const request = async (
    url: endpoints,
    options: RequestInit | undefined
  ): Promise<UserModel | TokenModel> => {
    setLoading(true);
    setErro("");

    const response = await fetch(url, options);
    let json = await response.json();

    if (responseHasErro(json)) {
      setErro(json.message);
      json = null;
    }

    setLoading(false);
    return json;
  };

  return {
    message,
    erro,
    loading,
    request,
    setMessage,
  };
};

export default useFetch;
