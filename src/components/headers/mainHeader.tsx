"use client";

import styles from "./mainHeader.module.css";
import { useUser } from "@/context/UserContext";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const { user } = useUser();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.headered}>
      <h1>ScapeNation</h1>
      <nav
        className={`${styles.naved} ${navOpen ? styles.open : ""}`}
        onClick={() => setNavOpen(false)}
      >
        <a className={`${styles.navClass}`} href="/">Home</a>
        <a className={`${styles.navClass}`} href="/about">About Us</a>
        <a className={`${styles.navClass}`} href="/gallery">Gallery</a>
        <a className={`${styles.navClass}`} href="/blog">Blog</a>
        <a className={`${styles.navClass}`} href="/forums">Forums</a>
      </nav>
      <button
        className={styles.menuButton}
        onClick={() => setNavOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.name || "User"}!</span>
            <button className={styles.buttoned} onClick={() => signOut()}>
              Logout
            </button>
          </>
        ) : (
          <button className={styles.buttoned} onClick={() => signIn("google")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}