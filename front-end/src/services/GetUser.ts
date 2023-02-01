export default async function () {
  const token = localStorage.getItem("token");
  const response = await fetch(`/api/user/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}
