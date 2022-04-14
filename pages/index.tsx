import Head from "next/head";
import Main from "../components/Main";
import { GetServerSideProps } from "next";
import Footer from "../components/Footer";
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
      <Main loggedin={props.login} />
      <CTASection />
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
