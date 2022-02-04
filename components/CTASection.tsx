import Link from "next/link";

function CTASection() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-cyan-500">
            Start your resume making today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/resumes">
              <a className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base font-medium rounded-md px-5 py-3 text-center mr-2 mb-2">
                Get started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CTASection;
