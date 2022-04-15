import Head from "next/head";
import Main from "../../components/Main";

const acingVideoInterviews = () => {
  const AVI = [
    {
      id: 1,
      title: "Select professional attire",
      desc: "Even though you’re conducting the interview from your home, remember you are being judged and assessed for your fit for the role, so dress professionally, just as you would if you were meeting in person.",
    },
    {
      id: 2,
      title: "Ready your sound and video equipment",
      desc: "Make sure that you have working Wi-Fi, a strong connection, and a quality headset or microphone so there are no tech issues during your call. Invest in quality equipment for audio and video work.",
    },
    {
      id: 3,
      title: "Demonstrate positive body language and behavior",
      desc: "Just as in an in-person interview, you want to demonstrate through your voice and body language that you’re interested, engaged, and professional in demeanor and language. Make sure you are not distracted (with your pet, or by loud sounds or interruptions in your home, etc.). If you know there will be significant interruptions or distractions during the scheduled time for the interview, see if you can change it to a time when those interruptions are at minimum.",
    },
    {
      id: 4,
      title: "Engage the interviewer with eye contact and connection",
      desc: "Make sure you smile, come across as engaging and interested, and make strong eye contact. Try not to look away during your interview or look down at your notes too frequently. Your eye contact reveals a good deal about how you’re feeling and thinking about what the interviewer is sharing with you.",
    },
    {
      id: 5,
      title: "As with every interview, prepare",
      desc: "Be fully prepared for your interview. Do your research in advance, understand clearly from what the hiring manager has shared in advance what they’re looking for in the role and be ready to talk about why you’re potentially very well suited to it. Have in front of you some written sound bites and bullet points that speak to how you can leverage your great talents and abilities and hit the ground running successfully in this job.",
    },
    {
      id: 6,
      title:
        "Finally, remember that you’re talented, experienced and have so much value to offer and that the interview is a two-way street",
      desc: "Don’t lose sight of the fact that you have a great deal to offer and so much experience and talent to leverage to be of service in important ways. Make sure too that you understand this is a two-way street and you are interviewing the hiring manager about the role and the organization just as much as they are interviewing you. Have your list of questions that you want to make sure you cover so that you will get a strong sense of this role, the work, and if you would truly be a fit, both emotionally and functionally.",
    },
  ];
  return (
    <>
      <Main />
      <Head>
        <title>Acing Video Interviews | MeSume - Awosome Resume Builder</title>
      </Head>
      <section className="bg-gray-800">
        <div className="container max-w-7xl mx-auto pt-5 px-4 sm:px-6 pb-10 lg:px-8 text-left md:text-left">
          <h1 className="text-cyan-500 lg:text-4xl text-2xl text-center font-bold">
            Acing Video Interviews
          </h1>
          <div className="text-cyan-500">
            <p className="mt-5">
              Today, as in-person interviewing has had to cease or slow due to
              restrictions during the Covid-19 pandemic, thousands of
              professionals are now needing to learn how to effectively
              interview in a new way using online platforms, such as Zoom,
              GoToMeeting and others. Here are 10 helpful tips for making the
              best impression you can in your video interview, and demonstrating
              that you’re a great fit for the role.
            </p>
          </div>
          <div className="text-cyan-500">
            <h2 className="font-bold text-lg mt-2">
              Be conscious of what’s in the view
            </h2>
            <p className="mt-2">
              While so many of us are now working remotely and using Zoom or
              other platforms for our meetings, we’ve grown more accustomed to
              seeing people in their home settings, and noticing their home
              décor, pets, family members, and other aspects of their personal
              life in the background.
            </p>
            <p className="my-2">
              For an interview, it’s fine to be in your home or living room but
              try to present whatever people see as neutral and professional as
              possible. You want to let yourself and your words, conversation
              and experience speak most powerfully about your qualifications and
              suitability for the job. And you want to avoid the chance that
              your interviewer will be distracted by what’s behind you, or
              perhaps have a negative reaction to any personal items (such as a
              plate of food behind you or a messy room) in your home.
            </p>
          </div>
          <div className="text-cyan-500">
            {AVI.map((e) => {
              return (
                <>
                  <h2 className="font-bold text-lg mt-2" key={e.id}>
                    {e.title}
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

export default acingVideoInterviews;
