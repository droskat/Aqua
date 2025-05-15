"use client";

import { signIn } from "next-auth/react";
import { useUser } from "@/context/UserContext";

export default function AuthPage() {
  const { user } = useUser();

  if (!user) {
    return (
      <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
        <h1>Register / Login</h1>
        <button
          onClick={() => signIn("google")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4285F4",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>You are logged in as {user.email}</p>
    </div>
  );
}