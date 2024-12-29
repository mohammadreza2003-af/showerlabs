"use client";
import React, { useEffect, useState } from "react";
import NavDropdown from "./NavDropDown";
import { Icon } from "@iconify/react";
import { handleToggle } from "@/utils/helper";
import { navItems } from "@/constants/data";
import Link from "next/link";
import { navItem } from "@/utils/type";
import Image from "next/image";

interface props {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const NavMobile = ({ toggle, setToggle }: props) => {
  const [navMobileStatus, setNavMobileStatus] = useState({
    active: false,
    type: "",
  });

  const [activeNav, setActiveNav] = useState<navItem>({
    title: "",
    path: "",
    sub: [],
    subWithImg: [],
  });

  const handleClick = () => {
    setNavMobileStatus({
      active: false,
      type: "",
    });
    setToggle(!toggle);
  };

  useEffect(() => {
    const item = navItems.filter((item) => item.title === navMobileStatus.type);
    setActiveNav(item[0]);
  }, [navMobileStatus]);

  return (
    <div
      className={`flex flex-col items-start gap-2 w-full bg-[#00000086] h-full fixed lg:hidden z-10 transition-3s top-0 mt-20 ${
        !toggle ? "visible opacity-100" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`py-8 px-4 flex flex-col sm:w-[500px]  w-full h-full bg-primary-background absolute`}
      >
        <div
          className={`flex flex-col items-start ${
            !navMobileStatus.active ? "block" : "opacity-0 invisible hidden"
          }`}
        >
          <div className={`lg:hidden  mt-4 border p-4 rounded-full `}>
            <button
              onClick={() => {
                setNavMobileStatus({
                  active: false,
                  type: "",
                });
                handleToggle(setToggle, toggle);
              }}
              className="flex items-center justify-center"
            >
              <Icon
                icon="bitcoin-icons:cross-filled"
                width="18"
                height="18"
                className="text-primary"
              />
            </button>
          </div>
          <div className="flex flex-col w-full justify-center gap-4 mt-2">
            {navItems?.map((item, index) => (
              <NavDropdown
                key={index}
                item={item}
                toggle={toggle}
                setToggle={setToggle}
                setNavMobileStatus={setNavMobileStatus}
                navMobileStatus={navMobileStatus}
                type={"mobile"}
              />
            ))}
          </div>
        </div>
        <div
          className={`transition-3s ${
            navMobileStatus.active
              ? ""
              : "opacity-0 invisible left-[-500px] hidden "
          }`}
        >
          <div className="flex flex-col items-start text-primary-text gap-4">
            <div className="lg:hidden self-start mt-4 border p-4 rounded-full">
              <button
                onClick={() => {
                  setNavMobileStatus({
                    active: false,
                    type: "",
                  });
                  handleToggle(setToggle, toggle);
                }}
                className="flex items-center justify-center"
              >
                <Icon
                  icon="bitcoin-icons:cross-filled"
                  width="18"
                  height="18"
                  className="text-primary"
                />
              </button>
            </div>
            <div className="flex flex-col items-start gap-4 font-semibold">
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  setNavMobileStatus({
                    active: false,
                    type: "",
                  })
                }
              >
                <Image
                  src="/images/icons/arrow-left.svg"
                  width={8}
                  height={8}
                  alt="arrow-left"
                />
                {activeNav?.title}
              </button>

              {activeNav?.sub?.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={handleClick}
                  className="hover:underline text-xl font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-start justify-start gap-4  sm:flex-row flex-col">
              {activeNav?.subWithImg?.map((item, index) => (
                <div key={index}>
                  <Link
                    onClick={handleClick}
                    href={item.path}
                    className="flex flex-col items-start gap-2 text-left"
                  >
                    <p className="font-bold font-valueSansProBold">
                      {item.title}
                    </p>
                    <div className="max-w-[180px]">
                      <Image
                        src={item.img}
                        width={180}
                        height={180}
                        alt=""
                        className="rounded-lg min-w-[180px]"
                      />
                    </div>
                    <p className="font-[400]">{item.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
