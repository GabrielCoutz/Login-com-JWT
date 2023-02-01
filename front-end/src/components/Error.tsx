import React from "react";

interface ErroModel {
  erro: {
    message: string;
  }[];
}

const Error = ({ erro }: ErroModel) => {
  if (!erro.length) return null;

  return (
    <ul>
      {erro.map(({ message }, index) => (
        <li key={message + index}>{message}</li>
      ))}
    </ul>
  );
};

export default Error;
