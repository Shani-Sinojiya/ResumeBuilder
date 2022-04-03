import Link from "next/link";
import { RefreshIcon } from "@heroicons/react/outline";

const Feature = () => {
  return (
    <section className="text-gray-400 bg-gray-800">
      <div className="container px-5 py-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-none rounded-lg p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-700 text-cyan-400 flex-shrink-0 cursor-pointer hover:bg-cyan-400 hover:text-gray-700 transition-colors duration-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                  width="24px"
                  fill="currentColor"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-cyan-400 text-lg title-font font-medium mb-3">
                  Create a resume that's worthy of who you are.
                </h2>
                <p className="leading-relaxed text-base text-cyan-200">
                  Keep up with the latest trends in resume design without having
                  to start from scratch. With new templates being designed every
                  week and having made it that easy to design your own templates
                  and submit them to the community, you’ll never have to copy
                  and edit your friend’s resume again.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex rounded-lg p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-700 text-cyan-400 flex-shrink-0 cursor-pointer hover:bg-cyan-400 hover:text-gray-700 transition-colors duration-600">
                <RefreshIcon className="w-10 h-10" aria-hidden="true" />
              </div>
              <div className="flex-grow">
                <h2 className="text-cyan-400 text-lg title-font font-medium mb-3">
                  Updating your resume shouldn't be a chore.
                </h2>
                <p className="leading-relaxed text-base text-cyan-200">
                  The biggest problem people face is when they have to update
                  their resume when they learned a new skill or found a new job.
                  The ever-shifting layouts and inconsistency with design over a
                  number of years made it difficult to update your own resume,
                  but Visual Resume makes it as easy as few clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-none rounded-lg p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-700 text-cyan-400 flex-shrink-0 cursor-pointer hover:bg-cyan-400 hover:text-gray-700 transition-colors duration-600 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-10 h-10"
                  height="18px"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M272.5 18.906c-12.775.17-26.23 2.553-40.344 7.594-30.165 55.31-68.313 120.904-125.72 178.5-21.19 21.26-39.23 44.94-52.28 68.313 1.294 6.312 4.984 11.65 10.72 17.406 10.992 11.032 30.86 21.618 54.593 33.25 46.313 22.695 107.284 50.39 146.374 108.467l195.625.032c-20.198-70.834-100.276-101.12-159.064-83.94-.073.03-.145.066-.22.095-1.61.633-3.27 1.138-4.967 1.563-.024.005-.04.025-.064.03-8.86 2.204-18.82 1.68-29.125-.406-24.79-5.02-52.76-19.695-61.342-45.687-28.615-86.673 16.65-179.742 78.156-223.28 23.064-16.328 49.06-25.848 74.47-24.47.144.008.29.023.436.03-24.19-22.74-53.33-37.95-87.25-37.5zm81.75 56c-19.213.01-39.414 7.59-58.625 21.188-54.644 38.682-96.652 125.024-71.188 202.156 5.127 15.53 27.25 29.162 47.282 33.22 10.015 2.027 19.218 1.518 23.717-.283 2.25-.9 3.173-1.84 3.594-2.562.422-.72.81-1.663.25-4.375-9.08-44.167-2.743-84.61 22.533-114.47 23.586-27.863 62.753-45.462 117.406-50.686-15.014-47.145-37.47-71.226-61.314-80.03-6.407-2.368-13.032-3.706-19.812-4.064-1.272-.067-2.563-.094-3.844-.094zM43.78 294.22c-5.405 12.554-9.136 24.756-10.905 36.186 7.178 27.76 51.898 55.43 91.094 61.344 1.703-5.973 5.832-11.475 10.28-14.25 51.01 28.844 86.18 60.704 102 101h229.594c.697-9.613.44-18.712-.625-27.344l-204.314-.03h-5.125l-2.75-4.345c-35.405-55.575-93.93-82.58-141.78-106.03-23.925-11.724-45.17-22.336-59.625-36.844-2.978-2.99-5.618-6.225-7.844-9.687z"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-cyan-400 text-lg title-font font-medium mb-3">
                  Kickstarting your career shouldn't come at a cost.
                </h2>
                <p className="leading-relaxed text-base text-cyan-200">
                  There are brilliant alternatives to this app like Novoresume
                  and Zety , but they come at a cost, mainly because of the time
                  the developers and the marketing they had to incur to make the
                  product. This app might not be better than them, but it does
                  cater to people who are just not in a position to pay hundreds
                  of dollars to create a resume to bootstrap their career.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex rounded-lg p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-700 text-cyan-400 flex-shrink-0 cursor-pointer hover:bg-cyan-400 hover:text-gray-700 transition-colors duration-600">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-9 h-9"
                  height="18px"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-cyan-400 text-lg title-font font-medium mb-3">
                  Your data is your data, none of our data
                </h2>
                <p className="leading-relaxed text-base text-cyan-200">
                  You must be thinking, if you're not paying for the product,
                  then you are the product. Or, at least your data is?{" "}
                  <strong> Well, this is the exception.</strong> Your data is
                  your own, as stated in the ridiculously simple{" "}
                  <Link href="/faq">
                    <a className="no-underline hover:underline">
                      <strong>Privacy Policy</strong>
                    </a>
                  </Link>
                  , We don't do anything with the data, it just exists on a
                  database for the convinient features provided by Visual
                  Resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
