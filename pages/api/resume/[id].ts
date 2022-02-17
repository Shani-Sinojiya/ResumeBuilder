import DBConn from "../../../middlewares/DBConn";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  GetData,
  DeleteData,
  PatchData,
  PutData,
} from "../../../lib/ResumeIdGetDelPutPatch";

DBConn();

const hendler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await GetData(req, res);
      break;
    case "DELETE":
      await DeleteData(req, res);
      break;
    case "PUT":
      await PutData(req, res);
      break;
    case "PATCH":
      await PatchData(req, res);
      break;
    default:
      res.status(203).json({ msg: "invalid authantication" });
      break;
  }
};

export default hendler;
