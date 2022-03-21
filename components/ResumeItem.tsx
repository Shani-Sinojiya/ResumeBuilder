import axios from "axios";
import { Fragment } from "react";
import { Key, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FolderAddIcon } from "@heroicons/react/outline";

const ResumeItom = (props: { userID: any }) => {
  const [ResumeEmpty, setResumeEmpty] = useState(true);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  async function dataFetch() {
    const res = await axios.get("/api/resume", {
      headers: {
        accept: `${props.userID}`,
      },
    });
    if (res.status === 200) {
      setProducts(res.data.data);
      if(res.data.data = []){
        setResumeEmpty(true);
      } else{
        setResumeEmpty(false)
      }
      // console.log(res);
    }
  }
  useEffect(() => {
    dataFetch();
  }, []);


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
                onClick={openModal}
                type="button"
                className="rounded-lg text-white bg-cyan-600 place-items-center justify-center font-medium p-3 mt-5 flex hover:text-black hover:bg-cyan-400"
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

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-cyan-400"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-cyan-300">
                      Your payment has been successfully submitted. We've sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  } else {
    return (
      <div className="bg-gray-800 h-screen">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* eslint-disable-next-line */}
            {products.map(
              (product: {
                id: Key | null | undefined;
                imageSrc: string | undefined;
                imageAlt: string | undefined;
                href: string | undefined;
                name: string | undefined;
              }) => (
                <div key={product?.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product?.imageSrc}
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
    );
  }
};

export default ResumeItom;
