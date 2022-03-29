import axios from "axios";
import { toast } from "react-toastify";
import { FolderAddIcon } from "@heroicons/react/outline";
import { FormEvent, Key, useEffect, useState } from "react";

const ResumeItom = (props: { userID: any }) => {
  const [ResumeEmpty, setResumeEmpty] = useState(true);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [NewTitle, setNewTitle] = useState("");

  async function dataFetch() {
    // const id = toast.loading("Please wait...");
    const res = await axios.get("/api/resume", {
      headers: {
        accept: `${props.userID}`,
      },
    });
    if (res.status === 200) {
      const { data } = res.data;
      setProducts(res.data.data);
      if (data.length == 0) {
        setResumeEmpty(true);
      } else {
        setResumeEmpty(false);
      }
    }
  }
  const HendleNewResume = async (e: FormEvent) => {
    e.preventDefault();
    const id = toast.loading("Creating resume ...");
    try {
      const res = await axios.post(
        "/api/resume",
        { title: NewTitle },
        {
          headers: {
            accept: `${props.userID}`,
          },
        }
      );
      if (res.status === 201) {
        toast.update(id, {
          render: "Creating successful :)",
          type: "success",
          isLoading: false,
          autoClose: 2500,
        });
      } else {
        throw Error;
      }
    } catch (error: any) {
      console.log(error.msg);
      toast.update(id, {
        render: "Failed Creating",
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    }
    setShowModal(false);
    setNewTitle("");
    dataFetch();
  };
  useEffect(() => {
    dataFetch();
  }, []);

  if (ResumeEmpty === true) {
    return (
      <>
        <div className="bg-gray-800 h-screen">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"></div>
          <div className="bg-gray-800 flex flex-col place-items-center justify-center">
            <div className="text-cyan-400 hover:text-cyan-600">
              <FolderAddIcon className="w-20 h-auto" />
            </div>
            <div className="text-center">
              <h1 className="text-cyan-400">No Resumes</h1>
              <h2 className="text-cyan-300 mt-2">
                Get Started by creating a new Resume.
              </h2>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                  setNewTitle("");
                }}
                className="rounded-lg text-white bg-cyan-600 place-items-center justify-center font-medium p-3 mt-5 flex hover:text-black hover:bg-cyan-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-9"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <div className="text-center">New Resume</div>
              </button>
            </div>
          </div>
        </div>
        {showModal ? (
          <div
            id="authentication-modal"
            tabIndex={1}
            aria-hidden={!showModal}
            aria-modal={showModal}
            className={`flex overflow-y-auto shadow-md shadow-slate-900/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-slate-800 bg-opacity-50`}
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
                <form
                  className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                  onSubmit={HendleNewResume}
                >
                  <h3 className="text-xl font-medium text-cyan-400 dark:text-white">
                    Create Resume
                  </h3>
                  <div>
                    <label
                      htmlFor="Name"
                      className="block font-serif mb-2 text-sm font-medium text-cyan-300"
                    >
                      Name{" "}
                      <span className="text-slate-400">{"(required)"}</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-slate-500 outline-none placeholder-slate-400 text-cyan-200"
                      placeholder="Full stack web developer"
                      required
                      onChange={(e) => {
                        setNewTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-cyan-400 text-justify font-medium">
                      You are going to be creating a new resume from scratch,
                      but first, let's give it a name. This can be the name of
                      the role you want to apply for, or if you're making a
                      resume for a friend, you could call it Alex's Resume.
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
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <div className="bg-gray-800 h-screen">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* eslint-disable-next-line */}
              {products.map(
                (product: {
                  _id: Key | null | undefined;
                  imageSrc: string | undefined;
                  imageAlt: string | undefined;
                  href: string | undefined;
                  name: string | undefined;
                }) => (
                  <div key={product?._id} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src="https://source.unsplash.com/nature/800x700/"
                        alt={product?.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-md text-cyan-500">
                          <a href={product?.href} className="font-bold">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product?.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {showModal ? (
          <div
            id="authentication-modal"
            tabIndex={1}
            aria-hidden={!showModal}
            aria-modal={showModal}
            className={`flex overflow-y-auto shadow-md shadow-slate-900/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-slate-800 bg-opacity-50`}
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-slate-800 rounded-lg shadow dark:bg-slate-700">
                <div className="flex justify-end p-2">
                  <button
                    type="button"
                    className="bg-transparent absolute top-4 right-4 rounded-lg text-sm p-1.5 font-extrabold ml-auto inline-flex text-cyan-500 items-center hover:bg-cyan-800 hover:text-cyan-400"
                    data-modal-toggle="authentication-modal"
                    onClick={() => {
                      setShowModal(false);
                      setNewTitle("");
                    }}
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
                <form
                  className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                  onSubmit={HendleNewResume}
                >
                  <h3 className="text-xl font-medium text-cyan-400 dark:text-white">
                    Create Resume
                  </h3>
                  <div>
                    <label
                      htmlFor="Name"
                      className="block font-serif mb-2 text-sm font-medium text-cyan-300"
                    >
                      Name{" "}
                      <span className="text-slate-400">{"(required)"}</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-slate-500 outline-none placeholder-slate-400 text-cyan-200"
                      placeholder="Full stack web developer"
                      required
                      onChange={(e) => {
                        setNewTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-cyan-400 text-justify font-medium">
                      You are going to be creating a new resume from scratch,
                      but first, let's give it a name. This can be the name of
                      the role you want to apply for, or if you're making a
                      resume for a friend, you could call it Alex's Resume.
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
        ) : null}
      </>
    );
  }
};

export default ResumeItom;