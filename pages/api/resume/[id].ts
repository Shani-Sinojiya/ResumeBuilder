import DBConn from "../../../lib/DBConn";
import Resumes from "../../../models/ResumeModel";
import type { NextApiRequest, NextApiResponse } from "next";

DBConn();

const hendler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      GetData(req, res);
      break;
    case "DELETE":
      DeleteData(req, res);
      break;
    case "PUT":
      PutData(req, res);
      break;
    case "PATCH":
      PatchData(req, res);
      break;
    default:
      res.status(203).json({ msg: "invalid authantication" });
      break;
  }
};

export default hendler;

const GetData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findById(id);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};

const DeleteData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findByIdAndDelete(id);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};

const PutData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findByIdAndUpdate(id, req.body);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};

const PatchData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findByIdAndUpdate(id, req.body);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};