import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import NavBar from "../../components/NavBar";
import ResumeItom from "../../components/ResumeItem";

const DashBoard = (props: { user: String }) => {
  return (
    <>
      <Head>
        <title>Dashboard | MeSume - Awosome Resume Builder</title>
        <meta
          name="description"
          content="MeSume is Awosome Resume Builder Web. User Make resume awosome"
        />
      </Head>
      <NavBar />
      <ResumeItom userID={props.user} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      user: session.userID,
    },
  };
};

export default DashBoard;
