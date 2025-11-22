import React from "react";
import { Navbar } from "@/components/navbar";
import { Chatbot } from "@/components/chatbot";
import { Preloader } from "@/components/preloader";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Preloader />
      <Navbar /> {/* no need for developerInitial */}
      <main className="min-h-screen w-full max-w-[700px] mx-auto px-5">
        {children}
      </main>
      <Chatbot />
    </>
  );
};

export default RootLayout;
