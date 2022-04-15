import Head from "next/head";
import Main from "../../components/Main";

const atsFrendlyResumes = () => {
  const ATS = [
    {
      id: 1,
      title: "Consider How Urgent You Are Searching",
      desc: "While many industries have and will continue to be hit hard by the COVID-19 pandemic, others are still hiring. If you’re unemployed and need a stopgap, consider looking there or wherever else you can find an opportunity that makes sense for you and pays the rent and puts food on the table in the meantime.",
    },
    {
      id: 2,
      title: "Get Comfortable Networking Online",
      desc: "Events will be cancelled for a while, so you’ll need to find a new networking strategy. Seek out like-minded professionals online and ask about virtual events. Look for professional groups to join on Facebook and LinkedIn. Both platforms offer a wide range of options with groups for every profession. For instance, if you’re looking for a job in marketing, you could join LinkedIn’s Global Marketing and Communications Professionals group. Join in the conversation, post and comment, and make yourself visible.",
    },
    {
      id: 3,
      title: "Stay In Touch",
      desc: "Maybe you recently had a promising interview and a job offer seemed to be on the horizon, but now the company has moved to remote work and you haven’t heard from the hiring manager. What should you do? Check in with the hiring manager by email, acknowledging that they might be scrambling to help their employees get used to the new setup.",
    },
    {
      id: 4,
      title: "Gather Intel",
      desc: "The COVID-19 crisis can provide a unique glimpse into company culture. Take note of how leadership deals with this emergency and treats its employees by following the company on social media and watching for any media coverage. You can mention what you read and listened to and use your specific knowledge to drive home how you could help the company achieve its goals if hired.",
    },
    {
      id: 5,
      title: "Use the Time to Reflect",
      desc: "Job seekers often jump at the first available opportunity or go into their search without fully considering what they want to do next. Take advantage of the slowing job market by getting clarity about where you want to work and the type of role and title you're seeking.",
    },
    {
      id: 6,
      title: "Boost Your Skills",
      desc: "Now is the perfect time to work on bolstering your qualifications, Moser says. Analyze job descriptions by listing each required skill and experience. Then consider whether you have that exact skill, if you have the skill but haven’t used it in a few years, or if you’re lacking the skill entirely. Use that information to determine what you need to brush up on to make yourself an even better candidate when the job market picks up again.",
    },
  ];
  return (
    <>
      <Main />
      <Head>
        <title>Jobs During COVID-19 | MeSume - Awosome Resume Builder</title>
      </Head>
      <section className="bg-gray-800">
        <div className="container max-w-7xl mx-auto pt-5 px-4 sm:px-6 pb-10 lg:px-8 text-left md:text-left">
          <h1 className="text-cyan-500 lg:text-4xl text-2xl text-center font-bold">
            Jobs During COVID-19
          </h1>
          <div className="text-cyan-500">
            <p className="mt-5">
              As companies move to remote work to fight the coronavirus pandemic
              and an increasing number of workers are being laid off or
              furloughed, you might be wondering if you should continue to send
              out resumes or just assume that no one is hiring for the
              foreseeable future. It’s true that economists are predicting a
              recession, but career experts say it’s best to keep networking and
              applying, provided you change your approach a bit to acknowledge
              these are uncertain times.
            </p>
            <p className="mt-2">
              Be prepared for job openings to be put on hold or disappear, even
              if they’ve been open for a while. That doesn’t mean they won’t
              open up again in a few months. Landers admits she herself was
              getting ready to hire someone but decided to put that on hold for
              a few weeks.
            </p>
            <p className="my-2">
              With all that said, you can still be actively working on your job
              search. These tips will help you navigate the process during the
              pandemic and the accompanying economic slowdown.
            </p>
          </div>
          <div className="text-cyan-500">
            {ATS.map((e) => {
              return (
                <>
                  <h2 className="font-bold text-lg mt-2" key={e.id}>
                    {e.id}. {e.title}
                  </h2>
                  <p className="my-2">{e.desc}</p>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default atsFrendlyResumes;
