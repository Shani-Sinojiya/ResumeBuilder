import Head from "next/head";
import NavBar from "../components/NavBar";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import ResumeItom from "../components/ResumeItom";

export default function Resumes(props: { data: any }) {
  return (
    <>
      <Head>
        <title>Resumes | MeSume - Awosome Resume Builder</title>
        <meta
          name="description"
          content="MeSume is Awosome Resume Builder Web. User Make resume awosome"
        />
      </Head>
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
