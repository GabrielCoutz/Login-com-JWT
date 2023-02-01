import React, { ReactNode } from "react";

async function fetchData() {
  const response = await fetch("/api/users");
  const json = await response.json();
  console.log(json);
}

async function fetchData2() {
  const response = await fetch("/api/user/1");
  console.log(response);

  const json = await response.json();
  console.log(json);
}

function handleSubmit(e: React.SyntheticEvent) {
  e.preventDefault();
  fetchData2();
  fetchData();
}

const Form = ({ children }: { children: ReactNode }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
