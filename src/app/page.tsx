import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl py-16">
      <section className="grid gap-6">
        <h1 className="text-4xl font-bold tracking-tight border-l-4 border-brand-red pl-3">
          Software Engineer / Your Name
        </h1>

        <p className="max-w-2xl text-neutral-300">
          大学生エンジニア。Webフロント〜バックまで横断し、ユーザー価値に直結する改善が得意です。
          最近は Next.js / Go / MySQL / Docker を中心に個人開発と長期インターンで実践しています。
        </p>

        {/* 🎯 ボタンエリア */}
        <div className="flex gap-4">
          {/* 左：メインボタン */}
          <Link
            href="/projects"
            className="rounded-xl bg-brand-red text-black font-semibold px-5 py-2.5 shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-200"
          >
            View Projects
          </Link>

          {/* 右：サブボタン */}
          <Link
            href="/contact"
            className="rounded-xl border border-brand-red text-brand-red px-5 py-2.5 hover:bg-brand-red hover:text-black transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-2">
        <h2 className="text-2xl font-semibold border-l-4 border-brand-red pl-3">
          Focus
        </h2>
        <ul className="list-disc pl-5 text-neutral-300">
          <li>ユーザー課題の特定と素早いプロトタイプ</li>
          <li>Next.js（App Router）を軸にしたフロントエンド開発</li>
          <li>Go / MySQL / Docker によるAPIとデータ設計</li>
        </ul>
      </section>
    </main>
  );
}