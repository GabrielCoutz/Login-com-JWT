export default async function () {
  const token = localStorage.getItem("token");
  const response = await fetch(`/api/user/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}
