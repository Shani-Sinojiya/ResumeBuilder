import DBConn from "../../../middlewares/DBConn";
import Resumes from "../../../models/ResumeModel";
import type { NextApiRequest, NextApiResponse } from "next";

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

export const GetData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findById(id);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};

export const DeleteData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findByIdAndDelete(id);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};

export const PutData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findByIdAndUpdate(id, req.body);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};

export const PatchData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const data = await Resumes.findByIdAndUpdate(id, req.body);
    res.status(200).json({ seccse: true, data });
  } catch (error: any) {
    res.status(400).json({ seccse: false, error: error.msg });
  }
};
