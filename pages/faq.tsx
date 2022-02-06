import Head from "next/head";
import { useRouter } from "next/router";

const FaQ = () => {
  const router = useRouter();
  return (
    <section className="relative py-16 min-w-screen animation-fade animation-delay bg-gray-800 min-h-screen">
      <Head>
        <title>
          Frequently Asked Questions | MeSume - Awosome Resume Builder
        </title>
      </Head>
      <div className="container px-8 mx-auto sm:px-12 xl:px-5">
        <h3 className="mt-1 text-2xl font-bold text-left sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center text-cyan-400">
          Frequently Asked Questions
        </h3>
        <div className="w-full px-6 py-6 mx-auto mt-10 border sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl border-slate-700">
          <p className="mt-2 text-base sm:text-lg md:text-normal text-cyan-300">
            This is aimed to be the world's simplest privacy policy. This
            document should explain to you why the app collects some
            information, what happens when your account is deleted and some
            other frequently asked questions answered regarding your privacy.
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-normal text-cyan-300">
            If you have any more questions, please send us an email and we'll
            answer as honest and quickly as possible {":)"}
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 border sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl border-slate-700">
          <h3 className="text-lg font-bold sm:text-xl md:text-2xl text-cyan-400">
            What identifiable information is stored about me?
          </h3>
          <p className="mt-2 text-base sm:text-lg md:text-normal text-cyan-300">
            Your name and your email address is stored along with your user
            information, if you signed in with Google, and of course, all the
            information you input in your resume is also stored in the database.
            You won't even get any marketing emails, feature updates,
            newsletters, notification emails, nothing.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 border sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl border-slate-700">
          <h3 className="text-lg font-bold sm:text-xl md:text-2xl text-cyan-400">
            Why are you using a database, why not keep everything local?
          </h3>
          <p className="mt-2 text-base sm:text-lg md:text-normal text-cyan-300">
            Not having a centralized database cause a lot more problems than we
            could solve, mainly having a large chunk of the users of the app
            having an outdated schema as the app evolved. This was a problem we
            could not solve without having at least some control.
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-normal text-cyan-300">
            Also, a lot of users were having trouble printing their resumes on
            their browsers, so with the help of Cloud Functions from Firebase,
            you can now print your resumes remotely. None of the resumes are
            stored, and they are sent to you immediately after generation.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 border sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl border-slate-700">
          <h3 className="text-lg font-bold sm:text-xl md:text-2xl text-cyan-400">
            How is this all free? There must be a catch!
          </h3>
          <p className="mt-2 text-base sm:text-lg md:text-normal text-cyan-300">
            <strong>Absolutely no catch to this freebie.</strong> This project
            is just our way of giving back to the community that w've learned so
            much from. If you'd like to show your appreciation however, you can
            recommend your friends and collegues to use this application, or
            follow us on social media.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-cyan-400 hover:text-white bg-gray-800 rounded-md group-hover:bg-opacity-0">
              Go Back
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaQ;
