import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <>
      <Head>
        <title>MeSume - Awosome Resume Builder</title>
        <meta
          name="description"
          content="MeSume is Awosome Resume Builder Web"
        />
      </Head>
      <Main />
      <CTASection />
      <Feature />
      <Footer />
    </>
  );
}

export default Home;
