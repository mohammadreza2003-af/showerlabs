import { footerItems1, footerItems2 } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-footer-background">
      <div className="w-full lg:pl-14 px-8 py-6">
        <div className="w-full flex items-center justify-between">
          <div className=" flex flex-col lg:items-start gap-8 items-center lg:grid grid-cols-[0.8fr_1.2fr] w-full">
            <div className="lg:block flex flex-col lg:items-start  items-center">
              <h2 className="font-valueSansProBold text-xl text-footer-text mb-2">
                Modtag en gratis vandrapport
              </h2>
              <form className="flex flex-col  gap-4 w-[320px]">
                <input
                  type="text"
                  placeholder="Fornavn"
                  className="focus:outline-none border-2 border-footer-text px-3 py-1 rounded-lg placeholder:text-footer-text"
                  required
                />
                <select
                  className="focus:outline-none border-2 border-footer-text px-3 py-1 rounded-lg bg-footer-background"
                  defaultValue="Kommune" // Use defaultValue here
                  required
                >
                  <option value="Kommune">Kommune</option>
                </select>

                <input
                  type="email"
                  placeholder="Email"
                  className="focus:outline-none border-2 border-footer-text px-3 py-1 rounded-lg placeholder:text-footer-text"
                  required
                />
                <button className="bg-footer-text text-white px-4 rounded-xl py-2 font-valueSansProBold">
                  GRATIS VANDRAPPORT
                </button>
                <p className="text-sm mt-4 text-slate-600 mb-4">
                  Ved at klikke på &quot;Gratis vandrapport&quot; accepterer du
                  vores
                  <Link href="#" className="underline">
                    privatlivspolitik
                  </Link>
                  og
                  <Link href="#" className="underline">
                    markedsføringspolitik
                  </Link>
                  .
                </p>
              </form>

              <div className="lg:block hidden">
                <p className="text-sm mt-4 text-slate-600 mb-4">
                  Ved at klikke på &quot;Gratis vandrapport&quot; accepterer du
                  vores
                  <Link href="#" className="underline">
                    privatlivspolitik
                  </Link>
                  og
                  <Link href="#" className="underline">
                    markedsføringspolitik
                  </Link>
                  .
                </p>
                <p className="text-slate-600">info@showerlabs.dk</p>
                <p className="text-slate-600">CVR: 44646331</p>
                <p className="text-slate-600">© 2024, Showerlabs ApS</p>
                <p className="text-slate-600">
                  Vesterbrogade 149, 1620 København V
                </p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <div>
                <ul className="flex flex-col items-start gap-3">
                  {footerItems1.map((item, index) => (
                    <li
                      key={index}
                      className="text-slate-400 hover:text-button-text-secondary transition-3s"
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="flex flex-col items-start gap-3">
                  {footerItems2.map((item, index) => (
                    <li
                      key={index}
                      className="text-slate-400 hover:text-button-text-secondary transition-3s"
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:hidden self-start">
              <p className="text-slate-600">info@showerlabs.dk</p>
              <p className="text-slate-600">CVR: 44646331</p>
              <p className="text-slate-600">© 2024, Showerlabs ApS</p>
              <p className="text-slate-600">
                Vesterbrogade 149, 1620 København V
              </p>
            </div>
          </div>
          <div className="2xl:block hidden">
            <Image
              src="/images/showerhead.gif"
              width={600}
              height={600}
              alt="shower"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
