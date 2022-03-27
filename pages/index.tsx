import Head from "next/head";
import { GetServerSideProps } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Feature from "../components/Feature";
import { getSession } from "next-auth/react";
import CTASection from "../components/CTASection";

function Home(props: { login: boolean }) {
  return (
    <>
      <Head>
        <title>MeSume - Awosome Resume Builder</title>
        <meta
          name="description"
          content="MeSume is Awosome Resume Builder Web"
        />
      </Head>
      <NavBar />
      <CTASection login={props.login} />
      <Feature />
      <Footer />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {
        login: false,
      },
    };
  }
  return {
    props: {
      login: true,
    },
  };
};
