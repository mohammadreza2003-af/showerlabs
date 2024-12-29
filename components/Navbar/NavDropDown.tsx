import Link from "next/link";
// import { useState } from "react";
import { NavDropDownProps } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavDropdown = ({
  item,
  type,
  setNavMobileStatus,
  setToggle,
  toggle,
}: NavDropDownProps) => {
  const handleClick = (path: string) => {
    setToggle?.(!toggle);
    router.push(path);
  };

  const router = useRouter();

  if (type !== "mobile") {
    return (
      <div className="inline-block group text-primary-text">
        <div className="flex items-center">
          <Link
            href={item.path}
            className="font-valueSansProBold font-bold px-4 py-2 flex items-center justify-center gap-2 hover:text-primary-text/80 transition-3s"
          >
            {item.title}
            {item.sub && (
              <Image
                src="/images/icons/arrow-down.svg"
                alt="arrow-down"
                width={10}
                height={10}
              />
            )}
          </Link>
        </div>
        {item.sub && (
          <div className="w-full transition-3s">
            <div className="absolute border-t mt-[16px] transition-3s w-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex-col justify-center items-center bg-primary-background gap-2 rounded shadow-md p-4 text-center">
              <div className="grid grid-cols-[0.5fr_1.5fr] justify-between  max-w-[720px] m-auto">
                <div className="flex flex-col items-start gap-2 font-semibold">
                  {item?.sub?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex items-start justify-start gap-4 ">
                  {item.subWithImg?.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.path}
                        className="flex flex-col items-start gap-2 text-left"
                      >
                        <p className="font-bold font-valueSansProBold">
                          {item.title}
                        </p>
                        <div className="max-w-[220px]">
                          <Image
                            src={item.img}
                            width={220}
                            height={220}
                            alt=""
                            className="rounded-lg min-w-[220px]"
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
        )}
      </div>
    );
  } else {
    return (
      <div className="relative inline-block text-primary-text">
        <div className="flex items-center">
          <button
            onClick={() => {
              if (
                item.title !== "Socialt ansvar" &&
                item.title !== "Vandrapport"
              ) {
                setNavMobileStatus?.({
                  active: true,
                  type: `${item.title ? item.title : ""}`,
                });
              } else {
                handleClick(item.path);
              }
            }}
            className="font-valueSansProBold font-bold text-xl px-4 py-2 flex items-center justify-center gap-2 hover:text-primary-text/80 transition-3s"
          >
            {item.title}
            {item.sub && (
              <div className="bg-slate-100 w-6 h-6 flex items-center justify-center rounded-full">
                <Image
                  src="/images/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={8}
                  height={8}
                />
              </div>
            )}
          </button>
        </div>
      </div>
    );
  }
};

export default NavDropdown;
