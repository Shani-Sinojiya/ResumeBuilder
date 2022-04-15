import Head from "next/head";
import Main from "../../components/Main";

const atsFrendlyResumes = () => {
  const ATS = [
    {
      id: 1,
      title: "Follow a standard resume format",
      desc: "Use a chronological resume to ensure the software can parse your experience section.",
    },
    {
      id: 2,
      title: "Correctly label your section",
      desc: "By sticking to common headings, you prevent the bot from placing your qualifications under the wrong categories, or misreading your sections altogether.",
    },
    {
      id: 3,
      title: "Include job-related keywords",
      desc: "To help determine whether your qualifications are relevant to the position, ATS software scans your resume for specific job-related resume keywords. To increase your chance of getting into the interview pool, look through the job listing for these words to include on your resume.",
    },
    {
      id: 4,
      title: "Use an ATS-friendly resume template",
      desc: "Many job seekers use fancy resume templates to help them stand out from other candidates. However, templates with graphic elements, tables, or unique fonts are difficult for most ATS software to read.",
    },
    {
      id: 5,
      title: "Use a common resume font",
      desc: "Most ATS software is programmed to read more common typefaces. Using an unusual or outdated looking font can result in your resume being rendered incorrectly, with large chunks of your information left unreadable.",
    },
    {
      id: 6,
      title: "Save your resume as the proper file type",
      desc: "PDFs are the preferred file format for most companies today, and are easily understood by any modern applicant tracking system.",
    },
  ];
  return (
    <>
      <Main />
      <Head>
        <title>ATS-Friendly Resumes | MeSume - Awosome Resume Builder</title>
      </Head>
      <section className="bg-gray-800">
        <div className="container max-w-7xl mx-auto pt-5 px-4 sm:px-6 pb-10 lg:px-8 text-left md:text-left">
          <h1 className="text-cyan-500 lg:text-4xl text-2xl text-center font-bold">
            ATS-Friendly Resumes
          </h1>
          <div className="text-cyan-500">
            <p className="mt-5">
              An ATS {"(Applicant Tracking System)"} is software used by
              companies to help them quickly evaluate potential candidates for
              any given job opening.
            </p>
            <p className="mt-2">
              ATS software automatically scans and processes each job
              application a company receives, and ranks them according to their
              relevant qualifications. It then produces a shortlist of qualified
              candidates to be reviewed by a hiring manager. If your resume
              doesn’t meet the requirements of a company’s ATS, your application
              will likely be rejected before a hiring manager even gets to look
              at it.
            </p>
            <p className="my-2">
              Applicant tracking systems {"(ATS)"} eliminate over 70% of
              applicants before their resume even reaches a hiring manager. Make
              sure your application makes the cut by learning how to write an
              ATS-friendly resume with our expert tips, examples, and ATS resume
              templates.
            </p>
          </div>
          <div className="text-cyan-500">
            <h2 className="font-bold text-lg mt-2">
              What is an ATS-compliant Resume?
            </h2>
            <p className="mt-2">
              An ATS-compliant resume is a resume designed specifically to make
              it easier for ATS software to find the information it’s looking
              for.
            </p>
            <p className="my-2">
              For example, this could mean using an easy-to-read resume format,
              or removing objects such as tables or images because they’re
              difficult for the ATS to parse. Resumes designed to be compliant
              with ATS software have a much higher chance of getting into the
              hands of a human hiring manager, which is one step closer to an
              interview.
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
