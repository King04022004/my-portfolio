export default function Footer() {
  return (
    <footer className="py-8 border-t border-brand-red/40 mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p className="text-brand-red font-medium">
          Built with <span className="text-neutral-100">Next.js</span> & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}