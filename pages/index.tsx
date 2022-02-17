import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Feature from "../components/Feature";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <>
      <Head>
        <title>MeSume - Awosome Resume Builder</title>
        <meta
          name="description"
          content="MeSume is Awosome Resume Builder Web" />
      </Head>
      <NavBar />
      <CTASection />
      <Feature />
      <Footer />
    </>
  );
}

export default Home;
