"use client";
import "./globals.css";
import { useState } from "react";
import NavMobile from "@/components/Navbar/NavMobile";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/context/CartContext";
import TryFree from "@/components/TryFree";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <html lang="en">
      <CartProvider>
        <body className="font-valueSansPro font-[400]">
          <TryFree />
          <NavMobile toggle={toggle} setToggle={setToggle} />
          <Navbar toggle={toggle} setToggle={setToggle} />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
