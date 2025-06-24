"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "../lib/utils";
import { Category } from "@/types";

interface MinNavProps {
  data: Category[];
}

const MainNav: React.FC<MinNavProps> = ({ data }) => {
  const pathname = usePathname();
  
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 overflow-x-auto">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-all duration-200 hover:text-black relative whitespace-nowrap py-2 px-1",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
          {route.active && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;