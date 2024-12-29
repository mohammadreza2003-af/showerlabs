import { useCart } from "@/context/CartContext";
import {
  calculateTotal,
  formatCurrency,
  redirectToGoogle,
} from "@/utils/helper";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = calculateTotal(cart);
  const [checkFree, setCheckFree] = useState<boolean>(false);

  useEffect(() => {
    const check = cart.find((item) => item.title !== "Gavekort");
    if (check) {
      setCheckFree(true);
    } else {
      setCheckFree(false);
    }
  }, [cart]);

  return (
    <div
      className={`fixed inset-0 text-product-card-text z-[99] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Cart Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-full flex flex-col md:max-w-[600px] bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className={`flex flex-col items-center p-4 ${
            cart.length > 0 && checkFree
              ? "border-b-4 p-4 border-green-500"
              : "border-b"
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl font-valueSansProBold">Indkøbskurv</h2>
            <button
              onClick={onClose}
              className="text-gray-600 text-xl hover:text-black"
            >
              <Image
                src="/images/icons/close.svg"
                width={24}
                height={24}
                alt="close"
              />
            </button>
          </div>
          <div>
            {cart.length > 0 && checkFree && (
              <div className="flex items-center gap-2">
                <p>Du får gratis levering! </p>
                <Image
                  src="/images/icons/fill-tick.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        {/* Body */}
        <div
          className={`flex flex-col items-center overflow-y-auto max-h-full ${
            cart.length > 0 ? "justify-start" : "justify-center"
          } py-4 h-full px-4`}
        >
          {cart.length <= 0 && (
            <>
              <div className="relative mb-4">
                <div className="text-5xl text-gray-400">
                  <Image
                    src="/images/icons/shop-cart.svg"
                    width={64}
                    height={64}
                    alt="shop"
                  />
                </div>
                <span className="absolute -top-1 -right-2 bg-product-card-text text-white text-xs rounded-full px-2 py-1">
                  0
                </span>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Din indkøbskurv er tom
              </p>
              <button
                className="px-8 py-4 bg-product-card-text text-white rounded-md"
                onClick={onClose}
              >
                Fortsæt med at handle
              </button>
            </>
          )}
          <div className="flex flex-col items-start w-full gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={item.img}
                      width={96}
                      height={96}
                      alt="product"
                      className="rounded-lg min-w-[96px]"
                    />
                  </div>
                  <div className="w-[65%]">
                    <h2 className="font-valueSansProBold">{item.title}</h2>
                    <div>
                      <span>
                        {item.offer > 0
                          ? item.offer + " kr"
                          : item.price > 0 && item.price + " kr"}{" "}
                      </span>
                      {item.offer > 0 && (
                        <span className="line-through">{item.price} kr</span>
                      )}
                    </div>
                    <p>{item.includes}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="underline"
                  >
                    Fjern
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="w-full flex flex-col px-4 bg-gray-100 p-4 border-t ">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-valueSansProBold">I alt</h2>
              <span className="text-2xl font-valueSansProBold">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="border-2  border-black p-3 rounded-xl text-sm">
              <h3 className="font-valueSansProBold">
                Vi donerer 10 liter rent drikkevand.
              </h3>
              <div className="flex justify-between items-center">
                <p>
                  Når du køber et brusehoved donerer vi 10 liter rent drikkevand
                  til The Thirst Project.
                </p>
                <Image
                  src="/images/icons/waterbottle.png"
                  width={24}
                  height={24}
                  alt="water bottle"
                />
              </div>
            </div>
            <div className="flex justify-end items-center gap-1 mb-4">
              <p className="text-sm">verified by</p>
              <Image
                src="/images/icons/verify.svg"
                width={52}
                height={52}
                alt="water bottle"
              />
            </div>
            <button
              onClick={redirectToGoogle}
              className="bg-primary-text flex items-center gap-2 justify-center text-white hover:text-primary-text  hover:bg-transparent px-8 md:px-12 py-2 text-lg md:text-xl transition-3s border-2 hover:border-primary-text border-primary-text font-semibold rounded-lg"
            >
              <Image
                src="/images/icons/cif.svg"
                width={24}
                height={24}
                alt="water bottle"
              />
              Gå til betaling
            </button>
            <p className="text-center mt-4">
              Returret til 31. jan. 2025 • 4,7 stjerner på Trustpilot{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
