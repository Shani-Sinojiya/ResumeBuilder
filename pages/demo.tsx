import Link from "next/link";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const demo = (props: { loggedin: boolean }) => {
  const router = useRouter();
  return (
    <div className="bg-gray-800 w-screen h-screen">
      <div className="container px-8 xl:px-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a>
              <span className="sr-only">Mesume</span>
              <div className="shadow-lg rounded-full">
                <img src="/Logo.svg" className="w-64 h-64" alt="Logo" />
              </div>
            </a>
          </Link>
          <div className="mt-12 md:mt-0 md:ml-12">
            <div className="text-5xl font-bold">
              <div>
                <span className="font-hsi text-cyan-500">Mesume Resume</span>
              </div>
            </div>
            <h2 className="mt-1 text-3xl text-cyan-600 font-mont">
              A free and robust resume builder.
            </h2>
            <div className="mt-12">
              {props.loggedin ? (
                <button
                  className="mx-auto md:mx-0 transition bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => {
                    router.push("/app/dashboard");
                  }}
                >
                  Go To App
                </button>
              ) : (
                <button
                  className="mx-auto md:mx-0 transition bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => {
                    signIn();
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (session) {
    return {
      props: {
        loggedin: true,
      },
    };
  }
  return {
    props: {
      loggedin: false,
    },
  };
};

export default demo;
