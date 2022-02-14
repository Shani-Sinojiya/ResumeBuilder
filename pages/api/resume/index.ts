import DBConn from "../../../lib/DBConn";
import { useSession } from "next-auth/react";
import Resumes from "../../../models/ResumeModel";
import type { NextApiRequest, NextApiResponse } from "next";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];
DBConn();

const hendler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { data: session } = useSession();
  switch (method) {
    case "GET":
      res.status(200).json(products);
      break;
    case "POST":
      if (session) {
        try {
          const Resume = new Resumes({
            title: req.body.title,
            user: session.userID,
          });
          await Resume.save();
          return res.status(201).json({ seccse: true, d: Resume });
        } catch (error: any) {
          return res.status(400).json({ seccse: false, error: error.msg });
        }
      }
      break;
    default:
      res.json({ msg: "hello" });
      break;
  }
};

export default hendler;
