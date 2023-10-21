import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className=" flex gap-4 flex-col border-none">
      <Menu
        as="div"
        className="md:hidden sm:block w-full relative !bg-none inline-block text-left !border-none"
      >
        <div>
          <Menu.Button className="border-none bg-none inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset">
            ABOUT JAKOs
            <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
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
          <Menu.Items className="text-center absolute left-1 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Company
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Career
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sustainability
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Teams
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Newsblog
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Media
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      
      <Menu
        as="div"
        className="md:hidden sm:block relative bg-none inline-block text-left w-full"
      >
        <div>
          <Menu.Button className="border-none bg-none inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset">
            ABOUT JAKOs
            <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
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
          <Menu.Items className="text-center absolute left-1 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Company
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Career
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sustainability
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Teams
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Newsblog
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Media
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      
      <Menu
        as="div"
        className="md:hidden sm:block relative bg-none inline-block text-left w-full"
      >
        <div>
          <Menu.Button className="border-none bg-none inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset">
            ABOUT JAKOs
            <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
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
          <Menu.Items className="text-center absolute left-1 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Company
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Career
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sustainability
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Teams
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Newsblog
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active
                        ? " text-center bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Media
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
