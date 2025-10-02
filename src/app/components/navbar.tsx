import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
};

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700">
      <ul className="mx-auto flex max-w-3xl list-none flex-row items-center justify-center space-x-8 px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 sm:px-6 lg:px-8">
        {Object.entries(navItems).map(([href, { name }]) => (
          <li key={href}>
            <Link
              href={href}
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
