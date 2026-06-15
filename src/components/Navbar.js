"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  const link = (href) =>
    `px-4 py-2 rounded-lg transition font-medium ${
      path === href
        ? "bg-primary-600 text-white shadow-sm"
        : "text-slate-600 hover:bg-primary-50 hover:text-primary-700"
    }`;

  return (
    <nav className="flex justify-center gap-2 md:gap-3 p-4 bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-indigo-100">
      <Link className={link("/")} href="/">Home</Link>
      <Link className={link("/skills")} href="/skills">Skills</Link>
      <Link className={link("/projects")} href="/projects">Projects</Link>
      <Link className={link("/about")} href="/about">About</Link>
      <Link className={link("/contact")} href="/contact">Contact</Link>
    </nav>
  );
}
