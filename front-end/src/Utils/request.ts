export default async (query: string | FormData, variables?: Object) =>
  await fetch(process.env.API_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
