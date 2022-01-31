import NavBar from "../components/NavBar";
import { GetServerSideProps } from "next";
import axios from "axios";

export default function Resumes(props: { data: any }) {
  return (
    <>
      <NavBar />
      {props.data.msg}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const d = await axios.get("http://localhost:3000/api/resume");
  //   const d = await fetch("http://localhost:3000/api/resume");
  //   const a = await d.toString();
  console.log(d);

  return {
    props: {
      data: d.data,
    },
  };
};
