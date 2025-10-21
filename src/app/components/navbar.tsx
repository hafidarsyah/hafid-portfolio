"use client";

import * as React from "react";
import Link from "next/link";
import { Code, Menu, X } from "lucide-react";

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
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Button size="icon-sm" variant="outline" className="cursor-pointer">
            <Code className="h-4 w-4" />
          </Button>
          <span className="text-2xl font-semibold">Hafid</span>
        </Link>

        <div className="flex items-center gap-3 md:order-2">
          <Button variant="outline" className="hidden md:block cursor-pointer">
            Unduh CV
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
          <ul className="flex flex-col md:flex-row md:items-center font-medium gap-2 md:gap-4 mt-4 md:mt-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-1.5 px-3 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="w-full border-t border-border mt-3 pt-3 space-y-2 md:hidden">
              <Button variant="outline" className="w-full cursor-pointer">
                Unduh CV
              </Button>
              <Button className="w-full cursor-pointer">Hire Me</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
