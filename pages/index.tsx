import Head from "next/head";
import Alert from "../components/Alert";
import NavBar from "../components/NavBar";

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
      <Alert alertNumer={2} />
    </>
  );
};

export default Index;
