import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Your Name",
  description: "Get in touch with Your Name",
};

const CONTACTS = [
  {
    label: "Email",
    href: "mailto:you@example.com?subject=Inquiry%20from%20Portfolio&body=ご用件：",
    value: "you@example.com",
  },
  { label: "GitHub", href: "https://github.com/yourname", value: "@yourname" },
  { label: "X (Twitter)", href: "https://x.com/yourname", value: "@yourname" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourname", value: "yourname" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="grid gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-neutral-300">
          お問い合わせは以下のリンクからお願いします。メールは件名付きの <code>mailto:</code> で開きます。
        </p>

        <ul className="grid gap-3">
          {CONTACTS.map((c) => (
            <li
              key={c.label}
              className="flex items-center justify-between rounded-xl border border-neutral-800 px-4 py-3"
            >
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">{c.label}</span>
                <span className="font-medium">{c.value}</span>
              </div>
              <Link
                href={c.href}
                className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800"
              >
                Open
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-neutral-800 p-4">
          <h2 className="mb-2 text-lg font-semibold">ご注意</h2>
          <ul className="list-disc pl-5 text-neutral-300 text-sm">
            <li>メール本文に「ご用件」「返信先」をご記入ください。</li>
            <li>SNSのDMは返信が遅れる場合があります。至急のご連絡はメールをご利用ください。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}