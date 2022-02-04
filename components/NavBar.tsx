import Link from "next/link";
import { useRouter } from "next/router";
import ProfileManu from "./ProfileManu";
import classNames from "../lib/className";
import { Disclosure } from "@headlessui/react";
import LoginIconForNav from "./LoginIconForNav";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const navigation = [
    { name: "Home", href: "/", current: router.asPath == "/" ? true : false },
    {
      name: "Resumes",
      href: "/resumes",
      current: router.asPath == "/resumes" ? true : false,
    },
  ];
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex text-center">
                  <Link href="/" passHref>
                    <h1 className="text-white cursor-pointer text-2xl font-serif font-bold">
                      Me<span className="text-gray-300">Re</span>Sume
                    </h1>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {status == "loading" || session == undefined || session == null ? (
                  <LoginIconForNav />
                ) : (
                  <ProfileManu />
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
