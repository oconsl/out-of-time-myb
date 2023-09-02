import { Timer } from "@/components";

export default function HomePage({params}) {
  return (
    <main className="">
      <h1 className="">Home Page</h1>
      <aside className="">
        <p>Aside content.</p>
      </aside>
      <section className="">
        <p>Main section content.</p>
        <Timer
          title={params.title}
          category="Obligatorio"
          className="bg-amber-500"
        />
      </section>
      <footer>Footer</footer>
    </main>
  );
}
