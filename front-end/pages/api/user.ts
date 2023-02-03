import type { NextApiRequest, NextApiResponse } from "next";
import { UPDATE_USER, GET_USER, CREATE_USER } from "../../src/Graphql/queries";
import request from "../../src/Utils/request";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let response;
  let json;
  const token = req.headers.authorization;

  switch (req.method) {
    case "GET":
      response = await request(GET_USER, undefined, token);
      const { data } = await response.json();

      res.status(200).json(data.user);
      break;

    case "PATCH":
      response = await request(UPDATE_USER, { data: req.body }, token);

      if (response.status !== 200)
        res.status(response.status).json(await response.json());

      json = await response.json();
      if (json.errors) res.status(200).json(json.errors);

      res.status(200).json(json.data.updateUser);
      break;

    case "POST":
      response = await request(CREATE_USER, { data: req.body });

      if (response.status !== 200)
        res.status(response.status).json(await response.json());

      json = await response.json();
      if (json.errors) res.status(200).json(json.errors);

      res.status(200).json(json.data.createUser);
      break;

    case "DELETE":
      break;

    default:
      break;
  }
}
