import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/assets/reloj-op1.png'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import ReviewCard from '@/components/ReviewCard'

const REWVIEW_INFO = [
  {
    id: 'review-1',
    title: 'Titulo 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 'review-2',
    title: 'Titulo 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
]

export default function Home () {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <h1 className=''>Out Of Time ⌛</h1>
      <picture>
        <source media="(min-width: 250px) and (max-width: 799px)" srcSet="movil-picture-1.webp" />
        <source media="(min-width: 800px)" srcSet="pc-picture.webp" />
        <img srcSet="pc-picture.webp" alt="Hourglass hero" />     
      </picture>
      <section>
        <h2>¿Qué es Out Of Time?</h2>
        <p>Out Of Time es una aplicación web que te ayuda a administrar tu tiempo.</p>
      </section>
      <Link href={'/login'}>Log In</Link>
      <ThemeSwitcher />
      <section>
        {
          REWVIEW_INFO.map(({ title, content, id }) => (
            <ReviewCard key={id} title={title} content={content} />
          ))
        }
      </section>
    </main>
  )
}