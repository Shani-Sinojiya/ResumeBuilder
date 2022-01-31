import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      res.send({ msg: "hello" });
      break;

    default:
      res.send("resume");
      break;
  }
};
