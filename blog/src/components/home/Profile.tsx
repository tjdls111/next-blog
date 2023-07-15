import Image from 'next/image'
import Link from 'next/link'
export default function Profile() {
  return (
    <section className="flex flex-col items-center my-5">
      <Image
        src="/images/avatar.png"
        className="rounded-full"
        alt="avatar"
        width="200"
        height="200"
        priority
      />
      <h2 className="mt-2 text-blog text-lg">Hello, I am Snrnsidy.</h2>
      <p className="mt-2 text-sm">Algorithm, PS 💖</p>
      <button className="px-3 py-2 rounded mt-2 bg-pink">
        <Link href="/contact">Contact Me</Link>
      </button>
    </section>
  )
}
