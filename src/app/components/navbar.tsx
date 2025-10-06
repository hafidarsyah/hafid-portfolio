import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Nama Kamu
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
