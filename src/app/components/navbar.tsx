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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-20 bg-background transition-all",
        scrolled ? "border-b border-border" : "border-b-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-3.5">
        <Link href="/" className="text-2xl font-semibold">
          Hafid
        </Link>

        <div className="flex items-center gap-3 md:order-2">
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/cv.pdf" download>
              Download CV
            </Link>
          </Button>

          <Button className="hidden md:block cursor-pointer">Hire Me</Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <span className="sr-only">Toggle Menu</span>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div
          className={cn(
            "items-center justify-between w-full md:flex md:w-auto md:order-1",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center font-medium gap-1 mt-4 md:mt-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button variant="ghost" size="sm" className="w-full justify-start md:justify-center" asChild>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}

            <li className="w-full border-t border-border mt-3 pt-3 space-y-2 md:hidden">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/cv.pdf" download>
                  Download CV
                </Link>
              </Button>

              <Button className="w-full" asChild>
                <Link href="/contact">Hire Me</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
