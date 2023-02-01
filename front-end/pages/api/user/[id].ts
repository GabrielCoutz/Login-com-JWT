import type { NextApiRequest, NextApiResponse } from "next";
import { GET_USER } from "../../../src/Graphql/queries";
import request from "../../../src/Utils/request";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id: userId } = req.query;

  const response = await request(GET_USER, { userId });
  const { data } = await response.json();
  res.status(200).json(data);
}
