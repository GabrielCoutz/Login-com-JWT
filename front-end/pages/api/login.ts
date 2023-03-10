import type { NextApiRequest, NextApiResponse } from "next";
import { LOGIN_USER } from "../../src/Graphql/queries";
import {
  jsonHasError,
  responseIs200,
} from "../../src/Utils/handleApiResponses";
import request from "../../src/Utils/request";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await request(LOGIN_USER, { data: req.body });

  if (!responseIs200(response))
    res.status(response.status).json(await response.json());

  const json = await response.json();
  if (jsonHasError(json)) res.status(200).json(json.errors);

  res.status(200).json(json.data.login);
}
