import Link from 'next/link';
import React from 'react';

const Header = () => {
return (
    <header className="flex justify-between mx-3 py-3 border-b-2 border-b-gray-500">
      <h1>
        <Link href="/">Snrnsidy</Link>
      </h1>
      <nav className="flex gap-3">
        <Link href="/about">About</Link>
        <Link href="/post">Post</Link>
      </nav>
    </header>
);
}
export default Header;