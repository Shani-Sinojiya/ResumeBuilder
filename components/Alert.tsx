import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Alert = (props: { alertNumer: number | 2 }) => {
  if (props.alertNumer == 1) {
    const [Close, setClose] = useState(false);
    return (
      <div
        id="alert-border-1"
        className={
          Close
            ? "hidden p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200"
            : "flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200"
        }
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-blue-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium text-blue-700">
          A simple info alert with an{" "}
          <a href="#" className="font-semibold underline hover:text-blue-800">
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 dark:bg-blue-200 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 dark:hover:bg-blue-300 inline-flex h-8 w-8"
          data-collapse-toggle="alert-border-1"
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    );
  } else if (props.alertNumer == 2) {
    const [Close, setClose] = useState(false);
    return (
      <div
        id="alert-border-2"
        className={
          Close
            ? "hidden p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
            : "flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
        }
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-red-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium text-red-700">
          A simple danger alert with an{" "}
          <a href="#" className="font-semibold underline hover:text-red-800">
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
          data-collapse-toggle="alert-border-2"
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    );
  } else if (props.alertNumer == 3) {
    const [Close, setClose] = useState(false);
    return (
      <div
        className={
          Close
            ? "hidden p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200"
            : "flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200"
        }
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-green-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium text-green-700">
          A simple success alert with an{" "}
          <a href="#" className="font-semibold underline hover:text-green-800">
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8"
          onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    );
  } else if (props.alertNumer == 4) {
    const [Close, setClose] = useState(false);
    return (
      <div
        className={
          Close
            ? "hidden p-4 mb-4 bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-200"
            : "flex p-4 mb-4 bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-200"
        }
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-yellow-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium text-yellow-700">
          A simple danger alert with an{" "}
          <a href="#" className="font-semibold underline hover:text-yellow-800">
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 dark:bg-yellow-200 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 dark:hover:bg-yellow-300 inline-flex h-8 w-8"
          onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    );
  } else if (props.alertNumer == 5) {
    const [Close, setClose] = useState(false);
    return (
      <div
        id="Alert-5"
        className={
          Close
            ? "hidden p-4 mb-4 bg-gray-100 border-t-4 border-gray-500 dark:bg-gray-700"
            : "flex p-4 mb-4 bg-gray-100 border-t-4 border-gray-500 dark:bg-gray-700"
        }
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          A simple dark alert with an{" "}
          <a
            href="#"
            className="font-semibold underline hover:text-gray-800 dark:hover:text-white"
          >
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          data-collepse-toggle="Alert5"
          aria-label="Close"
          className="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    );
  } else {
    const [Close, setClose] = useState(false);
    return (
      <div
        id="alert-border-2"
        className={
          Close
            ? "hidden p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
            : "flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
        }
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-red-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium text-red-700">
          A simple danger alert with an{" "}
          <a href="#" className="font-semibold underline hover:text-red-800">
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
          data-collapse-toggle="alert-border-2"
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault();
            setClose(true);
          }}
        >
          <span className="sr-only">Dismiss</span>
          <XIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    );
  }
};

export default Alert;