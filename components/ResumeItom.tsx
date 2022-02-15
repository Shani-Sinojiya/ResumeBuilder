import axios from "axios";
import { Key, useEffect, useState } from "react";

const ResumeItom = () => {
  const [products, setProducts] = useState([]);

  const dataFetch = async () => {
    const res = await axios.get("/api/resume");
    if (res.status === 200) {
      setProducts(res.data);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="bg-gray-800 h-screen">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
                  {/* eslint-disable-next-line */}
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
                        <span aria-hidden="true" className="absolute inset-0" />
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
};

export default ResumeItom;
