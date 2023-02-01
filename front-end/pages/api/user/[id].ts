import type { NextApiRequest, NextApiResponse } from "next";
import { GET_USER } from "../../../src/Graphql/queries";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id: userId } = req.query;

  const response = await fetch(process.env.API_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_USER,
      variables: { userId },
    }),
  });

  const { data } = await response.json();
  res.status(200).json(data);
}
