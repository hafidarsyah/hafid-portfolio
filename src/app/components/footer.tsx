export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-3xl px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
}
