import DBConn from "../../../lib/DBConn";
import { useSession } from "next-auth/react";
import Resumes from "../../../models/ResumeModel";
import type { NextApiRequest, NextApiResponse } from "next";

DBConn();

const hendler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      GetDataAll(res);
      break;
    case "POST":
      PostReqForResum(req, res);
      break;
    default:
      res.status(203).json({ msg: "invalid authantication" });
      break;
  }
};
export default hendler;

async function PostReqForResum(req: NextApiRequest, res: NextApiResponse) {
  const { data: session } = useSession();
  if (session) {
    try {
      const NewResume = new Resumes({
        title: req.body.title,
        user: session.userID,
      });
      await NewResume.save();
      res.status(201).json({ seccse: true, data: NewResume });
    } catch (error: any) {
      res.status(400).json({ seccse: false, error: error.msg });
    }
  } else {
    res.status(203).json({ seccse: false, error: "plaese login now" });
  }
}

const GetDataAll = async (res: NextApiResponse) => {
  const { data: session } = useSession();
  if (session) {
    try {
      const data = await Resumes.find({ user: session.userID });
      if (data == []) {
        res.status(200).json({ seccse: true, info: "please create a resume" });
      } else {
        res.status(200).json({ seccse: true, data });
      }
    } catch (error: any) {
      res.status(400).json({ seccse: false, error: error.msg });
    }
  } else {
    res.status(203).json({ seccse: false, error: "plaese login now" });
  }
};
