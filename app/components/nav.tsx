import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/blog": { name: "Blog" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-[28px] font-semibold tracking-tighter">
            Nextfolio
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto tracking-tight items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
