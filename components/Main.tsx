import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const demo = (props: { loggedin: boolean }) => {
  const router = useRouter();
  return (
    <div className="bg-gray-800">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a>
              <span className="sr-only">Mesume</span>
              <div className="shadow-lg rounded-full">
                {/* <img src="/Logo.svg" className="w-64 h-64" alt="Logo" /> */}
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 500 500"
                  fill="none"
                  className="w-64 h-64 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="250" cy="250" r="250" fill="#06B6D4" />
                  <path
                    d="M344.36 281.825H364.136C375.448 281.825 381.104 285.691 381.104 293.422C381.104 298.956 379.11 303.269 375.122 306.361C371.216 309.454 365.682 311 358.521 311H335.327C326.864 311 320.312 309.25 315.674 305.751C311.117 302.17 308.838 297.084 308.838 290.492C308.838 286.26 310.547 280.076 313.965 271.938L345.337 198.451L321.777 223.72C316.162 229.823 310.832 232.875 305.786 232.875C299.194 232.875 294.922 228.358 292.969 219.325L289.551 204.188L259.766 277.675C249.512 302.903 241.699 320.033 236.328 329.066C230.957 338.181 223.999 346.075 215.454 352.748C203.084 362.351 188.883 367.152 172.852 367.152C155.762 367.152 141.886 361.741 131.226 350.917C120.565 340.175 115.234 326.137 115.234 308.803C115.234 286.098 123.617 266.119 140.381 248.866C149.414 239.67 160.685 232.265 174.194 226.649C187.703 220.953 201.009 218.104 214.111 218.104C220.785 218.104 226.115 219.529 230.103 222.377C234.09 225.225 236.084 229.009 236.084 233.729C236.084 238.694 233.968 242.722 229.736 245.814C227.295 247.605 222.575 248.826 215.576 249.477C199.382 250.941 186.32 254.644 176.392 260.585C168.172 265.549 161.621 272.019 156.738 279.994C151.937 287.969 149.536 296.311 149.536 305.019C149.536 314.296 151.896 321.579 156.616 326.869C161.336 332.24 167.806 334.926 176.025 334.926C185.872 334.926 194.417 330.694 201.66 322.23C208.984 313.848 217 298.996 225.708 277.675L274.17 158.412C278.402 147.914 284.098 142.665 291.26 142.665C295.817 142.665 299.398 144.13 302.002 147.06C304.688 149.989 307.007 155.116 308.96 162.44L316.406 190.517L353.027 154.506C361.084 146.612 368.612 142.665 375.61 142.665C380.493 142.665 384.603 144.171 387.939 147.182C391.357 150.111 393.066 153.692 393.066 157.924C393.066 160.609 392.415 163.539 391.113 166.713L388.306 173.549L344.36 281.825Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </Link>
          <div className="mt-12 md:mt-0 md:ml-12">
            <div className="text-5xl font-bold">
              <div>
                <span className="font-hsi text-cyan-500">Mesume Resume</span>
              </div>
            </div>
            <h2 className="mt-1 text-3xl text-cyan-600 font-mont">
              A free and robust resume builder.
            </h2>
            <div className="mt-12">
              {props.loggedin ? (
                <button
                  className="mx-auto md:mx-0 transition bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 px-3 py-2 rounded-md text-sm font-medium font-mont"
                  onClick={() => {
                    router.push("/app/dashboard");
                  }}
                >
                  Go To App
                </button>
              ) : (
                <button
                  className="mx-auto md:mx-0 transition bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 px-3 py-2 rounded-md text-sm font-medium font-mont"
                  onClick={() => {
                    signIn();
                  }}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default demo;
