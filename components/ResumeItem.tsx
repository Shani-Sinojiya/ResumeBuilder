import axios from "axios";
import { Key, useEffect, useState } from "react";
import { FolderAddIcon } from "@heroicons/react/outline";

const ResumeItom = (props: { userID: any }) => {
  const [ResumeEmpty, setResumeEmpty] = useState(true);
  const [products, setProducts] = useState([]);

  async function dataFetch() {
    const res = await axios.get("/api/resume", {
      headers: {
        accept: `${props.userID}`,
      },
    });
    if (res.status === 200) {
      setProducts(res.data.data);
      if ((res.data.data = [])) {
        setResumeEmpty(true);
      } else {
        setResumeEmpty(false);
      }
    }
  }
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
