import Timer from '@/components/Timer'

export default function HomePage () {
  return (
    <main className=''>
      <h1 className=''>Home Page</h1>
      <aside className=''>
        <p>Aside content.</p>
      </aside>
      <section className=''>
        <p>Main section content.</p>
        <Timer title="Comer" category="Salud" className="bg-sky-500" />
        <Timer title="Trabajar" category="Obligatorio" className="bg-emerald-500" />
        <Timer title="Estuadiar" category="Obligatorio" className="bg-amber-500" />
      </section>
      <footer>Footer</footer>
    </main>
  )
}