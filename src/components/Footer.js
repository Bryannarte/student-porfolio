import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-slate-500 border-t border-indigo-100 bg-white/60">
      <p>© {new Date().getFullYear()} Bryan Hyacinth Narte. Built with Next.js.</p>
      <div className="mt-2 flex justify-center gap-4">
        <Link href="/projects" className="hover:text-primary-600 transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-primary-600 transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
