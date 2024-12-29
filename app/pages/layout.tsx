"use client";
import Cart from "@/components/Cart";
import { useCart } from "@/context/CartContext";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <div className="relative">
      {children}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;
