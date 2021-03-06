import { signIn } from "next-auth/react";
import { LoginIcon } from "@heroicons/react/outline";

const LoginIconForNav = () => {
  return (
    <button
      type="button"
      className="bg-gray-800 p-1 rounded-xl text-cyan-400 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-800 focus:ring-white"
      title="Login Now"
      onClick={(e) => {
        e.preventDefault();
        signIn();
      }}
    >
      <span className="sr-only">Login</span>
      <LoginIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default LoginIconForNav;
