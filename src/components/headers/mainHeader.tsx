"use client";

import styles from "./mainHeader.module.css";
import { useUser } from "@/context/UserContext";
import { signIn, signOut } from "next-auth/react";

export default function Header() {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <h1>My Next.js App</h1>
      <nav>
        <a href="/">Home</a> | <a href="/about">About Us</a> |{" "}
        <a href="/gallery">Gallery</a> | <a href="/blog">Blog</a>
      </nav>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.name || "User"}!</span>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <button onClick={() => signIn("google")}>Login</button>
        )}
      </div>
    </header>
  );
}