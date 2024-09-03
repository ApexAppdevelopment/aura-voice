import React from "react";
import AssistantButton from "@/components/AssistantButton/AssistantButton";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <main className="flex min-h-screen flex-col justify-center items-center p-12 lg:p-24">
          <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[300px] lg:before:h-[300px] lg:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[160px] lg:after:h-[180px] lg:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className=""
              src="/font2.png"
              alt="Main Logo"
              width={650}
              height={100}
            />
          </div>
        </main>
        <div className="absolute bottom-0 right-0 pb-6 pr-6 lg:pb-10 lg:pr-10">
          <AssistantButton />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <main className="flex min-h-screen flex-col justify-center items-center p-6 lg:p-12">
          <div className="relative flex place-items-center before:absolute before:h-[150px] before:w-[240px] sm:before:h-[200px] sm:before:w-[320px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[100px] after:w-[160px] sm:after:h-[120px] sm:after:w-[180px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className=""
              src="/font2.png"
              alt="Main Logo"
              width={450}
              height={70}
            />
          </div>
        </main>
        <div className="absolute bottom-0 right-0 pb-6 pr-6 lg:pb-10 lg:pr-10">
          <AssistantButton />
        </div>
      </div>
    </div>
  );
}
