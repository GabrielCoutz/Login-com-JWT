// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GET_USERS } from "../../src/Graphql/queries";
import request from "../../src/Utils/request";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await request(GET_USERS);
  const { data } = await response.json();
  res.status(200).json(data);
}
