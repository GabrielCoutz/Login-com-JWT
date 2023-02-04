export default async (
  query: string | FormData,
  variables?: Object,
  token?: string
) => {
  return await fetch(process.env.API_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
};
