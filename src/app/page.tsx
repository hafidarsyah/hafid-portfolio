"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto mt-40">
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <a
              href="#"
              role="alert"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <span className="text-xs bg-black rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>
              <span className="text-sm font-medium">
                Lorem, ipsum dolor.
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586
         10 7.293 6.707a1 1 0 011.414-1.414l4
         4a1 1 0 010 1.414l-4 4a1 1
         0 01-1.414 0z"
                />
              </svg>
            </a>

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              dicta ullam quas. Atque ullam eligendi autem minus voluptatum
              voluptatem? Neque!
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/">
                  <Mail />
                  Hire Me
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  <Download />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
              width={500}
              height={500}
              className="object-contain"
            /> */}
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
