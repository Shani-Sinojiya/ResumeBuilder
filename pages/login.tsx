import Head from "next/head";
import Login from "../components/Login";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

function loginMain() {
  return (
    <>
      <Head>
        <title>Login | MeSeme - Awosome Resume Builder</title>
        <meta
          name="description"
          content="Login page for MeSume. MeSume is Awosome Resume Builder Web"
        />
      </Head>
      <Login />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {
        data: null,
      },
    };
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default loginMain;
