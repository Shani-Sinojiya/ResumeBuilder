import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ResumeItom from "../../components/ResumeItom";

export default function Resumes(props: { user: any }) {
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
      <ResumeItom userID={props.user} />
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
      user: session.userID,
    },
  };
};
