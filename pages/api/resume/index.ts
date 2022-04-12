import DBConn from "../../../middlewares/DBConn";
import Resumes from "../../../models/ResumeModel";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

DBConn();

const hendler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await GetDataAll(req, res);
      break;
    case "POST":
      await PostReqForResum(req, res);
      break;
    default:
      res.status(203).json({ msg: "invalid authantication" });
      break;
  }
};

async function PostReqForResum(req: NextApiRequest, res: NextApiResponse) {
  const { headers } = req;
  const imageNumber = Math.floor(Math.random() * 26);
  const imageUrl = "/img/" + imageNumber + "_resume_image.jpg";

  if (headers.accept != null) {
    try {
      const NewResume = new Resumes({
        title: req.body.title,
        user: headers.accept,
        image: `${imageUrl}`,
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

const GetDataAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const { headers } = req;
  if (headers.accept != null) {
    try {
      const data = await Resumes.find({ user: headers.accept });
      res.status(200).json({ seccse: true, data });
    } catch (error: any) {
      res.status(400).json({ seccse: false, error: error.msg });
    }
  } else {
    res.status(203).json({ seccse: false, error: "plaese login now" });
  }
};

export default hendler;
