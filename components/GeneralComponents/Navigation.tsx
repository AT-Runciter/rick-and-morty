import React from "react";
import Link from "next/link";

export default function Navigation({ navStyles = "", linkStyles='' }) {
  return (
    <nav className={navStyles}>
      <Link href="/" className={linkStyles}>
        Home
      </Link>
      <Link href="/favorites" className={linkStyles}>
        Favorites
      </Link>
      <Link href="/contact" className={linkStyles}>
        Contact
      </Link>
    </nav>
  );
}
