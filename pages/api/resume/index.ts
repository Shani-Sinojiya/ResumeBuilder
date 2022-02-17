import DBConn from "../../../middlewares/DBConn";
import type { NextApiRequest, NextApiResponse } from "next";
import { GetDataAll, PostReqForResum } from "../../../lib/ResumeGetAllAndPost";

DBConn();

const hendler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await GetDataAll(res);
      break;
    case "POST":
      await PostReqForResum(req, res);
      break;
    default:
      res.status(203).json({ msg: "invalid authantication" });
      break;
  }
};
export default hendler;