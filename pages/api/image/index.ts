import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const imageNumber = Math.floor(Math.random() * 13);
  res
    .status(200)
    .json({ success: true, url: "/img/" + imageNumber + "_resume_image.jpg" });
};
