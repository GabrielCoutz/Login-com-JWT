import { DataModel } from "../Interfaces/global";

export default async function (data: DataModel) {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
