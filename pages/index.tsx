import Head from "next/head";
import NavBar from "../components/NavBar";
import CTASection from "../components/CTASection";

const Index = () => {
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
      <CTASection />
    </>
  );
};

export default Index;
