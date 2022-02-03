import NavBar from "../components/NavBar";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import ResumeItom from "../components/ResumeItom";

export default function Resumes(props: { data: any }) {
  return (
    <>
      <NavBar />
      <ResumeItom />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: "hello",
    },
  };
};
