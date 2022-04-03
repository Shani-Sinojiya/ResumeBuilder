import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <a className="flex items-center">
              <span className="self-center text-3xl font-semibold font-serif whitespace-nowrap text-cyan-400">
                MeSume
              </span>
            </a>
          </Link>
          <h2 className="text-cyan-300 text-lg sm:text-md">
            A free and robust resume builder.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-cyan-400 uppercase">
              <strong>Page</strong>
            </h3>
            <ul>
              <li className="mb-4">
                <Link href="/">
                  <a className="text-cyan-300 hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <a className="text-cyan-300 hover:underline">Resume</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-cyan-400 uppercase">
              <strong>Legal</strong>
            </h3>
            <ul>
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
          © 2022{" "}
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
