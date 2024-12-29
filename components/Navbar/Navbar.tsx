import Image from "next/image";
import NavDropdown from "./NavDropDown";
import { navItems } from "@/constants/data";
import { handleToggle } from "@/utils/helper";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface props {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const Navbar = ({ toggle, setToggle }: props) => {
  const router = useRouter();
  const { setIsCartOpen, cart } = useCart();
  return (
    <div className="w-full flex justify-center items-center shadow-sm fixed bg-primary-background z-50 top-[36px]">
      <div className="max-w-[1460px] w-full px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden"
            onClick={() => handleToggle(setToggle, toggle)}
          >
            <Image
              src="/images/icons/hamburger.svg"
              width={24}
              height={24}
              alt="hamburger"
            />
          </button>
          <div>
            <Image
              src="/logo.png"
              className="invert sm:w-[200px] w-[150px] cursor-pointer"
              width={200}
              height={200}
              alt="logo"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <div className="hidden lg:block">
            <ul>
              {navItems.map((item, index) => (
                <NavDropdown key={index} item={item} type={"big-devices"} />
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsCartOpen(true)} className="relative">
              {cart.length > 0 && (
                <div className="bg-primary-text text-white w-[18px] h-[18px] text-[12px] absolute top-[-5px] right-[-5px] flex items-center justify-center rounded-full">
                  {cart.length}
                </div>
              )}
              <Image
                src="/images/icons/shop.svg"
                width={24}
                height={24}
                alt="logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
