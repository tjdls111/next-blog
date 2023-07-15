import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col items-center my-5">
      <Image src="/images/avatar.png" alt="avatar" width="100" height="100" />
      <p className="mt-2 text-blog text-lg">Hello, I am Snrnsidy.</p>
      <p className="mt-2 text-sm">Algorithm, PS 💖</p>
      <button className="px-3 py-2 rounded mt-2 bg-pink">
        <Link href="/contact">Contact Me</Link>
      </button>
    </section>
  )
}
