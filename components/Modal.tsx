import { useState } from "react";

export default function Modal(props: { smodale: boolean }) {
  const [showModal, setShowModal] = useState(props.smodale);
  return (
    <>
      <div
        id="authentication-modal"
        tabIndex={showModal ? 1 : -1}
        aria-hidden={!showModal}
        aria-modal={showModal}
        className={`${
          showModal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-slate-800 bg-opacity-20`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-slate-800 rounded-lg shadow dark:bg-slate-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="bg-transparent absolute top-4 right-4 rounded-lg text-sm p-1.5 font-extrabold ml-auto inline-flex text-cyan-500 items-center hover:bg-cyan-800 hover:text-cyan-400"
                data-modal-toggle="authentication-modal"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
              <h3 className="text-xl font-medium text-cyan-400 dark:text-white">
                Create Resume
              </h3>
              <div>
                <label
                  htmlFor="Name"
                  className="block font-serif mb-2 text-sm font-medium text-cyan-300"
                >
                  Name <>{"(required)"}</>
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-slate-500 outline-none placeholder-slate-400 text-cyan-200"
                  placeholder="Full stack web developer"
                  required
                />
              </div>
              <div>
                <p className="text-cyan-400 text-justify font-medium">
                  You are going to be creating a new resume from scratch, but
                  first, let's give it a name. This can be the name of the role
                  you want to apply for, or if you're making a resume for a
                  friend, you could call it Alex's Resume.
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Create Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
