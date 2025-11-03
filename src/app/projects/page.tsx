import { projects } from "@/data/projects";
export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="grid gap-4">
        {projects.map(p => (
          <li key={p.id} className="rounded-xl border border-neutral-800 p-4">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-neutral-300">{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}