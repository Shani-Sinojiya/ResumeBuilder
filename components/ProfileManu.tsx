import { Fragment } from "react";
import classNames from "../lib/className";
import LoginIconForNav from "./LoginIconForNav";
import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";

const ProfileManu = () => {
  const { data: session, status } = useSession();
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        {status == "loading" ? (
          <LoginIconForNav />
        ) : (
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            {/* eslint-disable-next-line */}
            <img
              className="h-8 w-8 rounded-full"
              src={`${session?.user?.image}`}
              alt={`${session?.user?.name}`}
            />
          </Menu.Button>
        )}
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3 px-4">
            <span className="block text-sm text-cyan-400 hover:text-cyan-500 dark:text-cyan-400">
              {session?.user?.name}
            </span>
            <span className="block text-sm font-medium text-cyan-300 truncate dark:text-cyan-400">
              {session?.user?.email}
            </span>
          </div>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className={classNames(
                  active ? "text-cyan-500" : "",
                  "block px-4 py-2 text-sm text-cyan-400 cursor-pointer"
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileManu;
