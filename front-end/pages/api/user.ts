import type { NextApiRequest, NextApiResponse } from "next";
import {
  UPDATE_USER,
  GET_USER,
  CREATE_USER,
  DELETE_USER,
} from "../../src/Graphql/queries";
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
  let response;
  let json;
  const token = req.headers.authorization;

  const handleResponse = async (response: Response) => {
    if (!responseIs200(response))
      res.status(response.status).json(await response.json());

    json = await response.json();
    handleJson(json);

    return json;
  };

  const handleJson = (json: any) => {
    if (jsonHasError(json)) res.status(200).json(json.errors);
  };

  switch (req.method) {
    case "GET":
      response = await request(GET_USER, undefined, token);
      const { data } = await response.json();

      res.status(200).json(data.user);
      break;

    case "PATCH":
      response = await request(UPDATE_USER, { data: req.body }, token);
      json = await handleResponse(response);

      res.status(200).json(json.data.updateUser);
      break;

    case "POST":
      response = await request(CREATE_USER, { data: req.body });
      json = await handleResponse(response);

      res.status(200).json(json.data.createUser);
      break;

    case "DELETE":
      response = await request(DELETE_USER, undefined, token);
      json = await handleResponse(response);

      res.status(200).json(json.data.deleteUser);

      break;

    default:
      const methodNotSupportedResponse: Data = {
        name: "Método não suportado.",
      };
      res.status(405).json(methodNotSupportedResponse);
      break;
  }
}
