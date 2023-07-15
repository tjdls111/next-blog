'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './style.module.scss'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="sticky bg-white top-0 flex justify-between mx-3 py-3 border-b-2 border-b-gray-500">
      <Link href="/">Snrnsidy</Link>
      <nav className={`flex gap-3 ${styles.nav}`}>
        <Link href="/" className={pathname === '/' ? 'bg-pink' : ''}>
          🏠
        </Link>
        <Link
          href="/about"
          className={pathname.includes('about') ? 'bg-pink' : ''}
        >
          About🤗
        </Link>
        <Link
          href="/post"
          className={pathname.includes('post') ? 'bg-pink' : ''}
        >
          Posts📚
        </Link>
        <Link
          href="/contact"
          className={pathname.includes('contact') ? 'bg-pink' : ''}
        >
          📮
        </Link>
      </nav>
    </header>
  )
}
export default Header
