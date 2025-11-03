import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="py-4 border-b border-brand-red/40">
      <nav className="flex items-center justify-between">
        {/* 左側：ロゴや名前 */}
        <Link
          href="/"
          className="text-xl font-bold text-brand-red tracking-wide hover:text-red-500 transition"
        >
          YourName
        </Link>

        {/* 右側：ナビゲーション */}
        <div className="flex gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-neutral-300 hover:text-brand-red transition"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}