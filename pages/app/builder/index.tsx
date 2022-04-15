import { GetServerSideProps } from "next";

const u = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};

export default u;
