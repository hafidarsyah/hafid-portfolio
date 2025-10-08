"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background fixed w-full z-20 top-0 start-0 border-b border-border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Hafid
          </span>
        </Link>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <Button>Get started</Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border border-border"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "items-center justify-between w-full md:flex md:w-auto md:order-1",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col md:p-0 mt-4 font-medium border border-border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-3 rounded-sm md:p-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
