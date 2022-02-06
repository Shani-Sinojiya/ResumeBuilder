import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import NavBar from "../../components/NavBar";
import ResumeItom from "../../components/ResumeItom";
import Footer from "../../components/Footer";

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
      <Footer />
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
