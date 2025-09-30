"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CyberSecurityUI() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background with team image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/team-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl">
          {/* Left white card */}
          <div className="bg-white py-8 sm:py-12 lg:py-16 pl-6 sm:pl-8 lg:pl-12 pr-8 sm:pr-12 lg:pr-24 rounded-xl w-full lg:w-[550px] shadow-2xl relative z-20 mb-6 lg:mb-0">
            <div className="mb-4">
              <span className="text-blue-700 text-sm sm:text-base font-semibold uppercase tracking-wider">
                CYBER SHIELD FOR CORPORATES
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Legal Support & Awareness in Digital Cyber Crimes
            </h1>

            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Specializes in combating cyber fraud and providing robust
              protection against digital crimes. With consultancy and expert
              solutions, we safeguard businesses and corporates from online
              threats, ensuring a secure digital environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  We offer data security and cyber services for companies &
                  businesses
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Get the best consult from cyber expert advisors working in the
                  legal sector for corporates.
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Single Image */}
          {/* Right side - Single Image */}
          <div className="relative w-full lg:w-[550px] ml-4 z-20  flex justify-center">
            <div className=" p-6 flex items-center justify-center w-full h-72 sm:h-96 lg:h-[600px]">
              <Image
                src="/images/Sadaiv_logo.png"
                alt="Cybersecurity"
                width={400}
                height={400}
                className="object-contain max-h-full max-w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
