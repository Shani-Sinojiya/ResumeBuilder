import Link from "next/link";
import { useRouter } from "next/router";
import ProfileManu from "./ProfileManu";
import classNames from "../lib/className";
import { useSession } from "next-auth/react";
import { Disclosure } from "@headlessui/react";
import LoginIconForNav from "./LoginIconForNav";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

export default function NavBar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  // const navigation = [{}];
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-cyan-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt1Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex text-center">
                  <Link href="/" passHref>
                    <h1 className="text-cyan-400 cursor-pointer text-2xl font-serif font-bold">
                      <img
                        className="block lg:hidden h-9 w-auto"
                        src="/Logo.svg"
                        alt="Mesume"
                      />
                      <img
                        className="hidden lg:block h-10 w-auto"
                        src="/Logo-Text.svg"
                        alt="Mesume"
                      />
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {status == "loading" ||
                session == undefined ||
                session == null ? (
                  <LoginIconForNav />
                ) : (
                  <ProfileManu />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
