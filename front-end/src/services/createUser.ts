import { createUserResponse, DataModel } from "../Interfaces/globa";

export default async function (data: DataModel) {
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const a: createUserResponse = await response.json();
  return a;
}
