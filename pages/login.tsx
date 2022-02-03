import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Login from "../components/Login";

function loginMain() {
  return <Login />;
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
