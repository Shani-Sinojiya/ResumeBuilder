import Resumes from "../models/ResumeModel";
import type { NextApiRequest, NextApiResponse } from "next";

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
