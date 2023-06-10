'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
const pathname=usePathname();
return (
    <header className="flex justify-between mx-3 py-3 border-b-2 border-b-gray-500">
      <h1>
        <Link href="/">Snrnsidy</Link>
      </h1>
      <nav className="flex gap-3">
        <Link href="/about" className={pathname.includes('about')?'bg-gray-400':''}>About</Link>
        <Link href="/post" className={pathname.includes('post')?'bg-gray-400':''}>Post</Link>
      </nav>
    </header>
);
}
export default Header;