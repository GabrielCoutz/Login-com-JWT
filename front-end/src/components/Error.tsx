import React from "react";

interface ErroModel {
  message: string;
}

const ErroIsFilled = (erro: any): erro is ErroModel => {
  if (erro?.message) return true;
  return false;
};

const Error = ({ erro }: any) => {
  if (!ErroIsFilled(erro)) return null;

  return (
    <ul>
      <li>{erro.message}</li>
    </ul>
  );
};

export default Error;
