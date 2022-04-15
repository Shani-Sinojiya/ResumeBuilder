import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <a className="flex items-center">
              <img src="/Logo-Text.svg" className="mr-3 h-14" alt="MeSume" />
            </a>
          </Link>
          <h2 className="text-cyan-300 text-lg sm:text-md">
            A free and robust resume builder.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-cyan-400 uppercase">
              <strong>Links of Interst</strong>
            </h3>
            <ul>
              <li className="mb-4">
                <Link href="/blog/design-beautiful-resumes">
                  <a className="text-cyan-300 hover:underline">
                    Design Beautiful Resumes
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/blog/ats-friendly-resumes">
                  <a className="text-cyan-300 hover:underline">
                    ATS-Friendly Resumes
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog/acing-video-interviews">
                  <a className="text-cyan-300 hover:underline">
                    Acing Video Interviews
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-4 mt-11">
                <Link href="/blog/jobs-during-covid-19">
                  <a className="text-cyan-300 hover:underline">
                    Jobs During COVID-19
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/faq">
                  <a className="text-cyan-300 hover:underline">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-cyan-300 hover:underline">
                    Frequently Asked Questions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-cyan-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-cyan-300 text-center dark:text-cyan-300">
          &copy; 2022{" "}
          <Link href="/">
            <a className="hover:underline">MeSume</a>
          </Link>
          <sup>TM</sup>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
