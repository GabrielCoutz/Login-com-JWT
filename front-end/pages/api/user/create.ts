import type { NextApiRequest, NextApiResponse } from "next";
import { CREATE_USER } from "../../../src/Graphql/queries";
import request from "../../../src/Utils/request";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await request(CREATE_USER, { data: req.body });
  const data = await response.json();
  res.status(200).json(data);
}
