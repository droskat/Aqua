"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ForumThread {
  id: number;
  title: string;
  upvotes: number;
  createdAt: string;
}

export default function Forums() {
  const [threads, setThreads] = useState<ForumThread[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/forums")
      .then(res => res.json())
      .then(setThreads);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/forums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      const newThread = await res.json();
      setThreads([newThread, ...threads]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h1>Forums</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Thread title"
          required
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Describe your query"
          required
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <Link href={`/forums/${thread.id}`}>{thread.title}</Link> ({thread.upvotes} upvotes)
          </li>
        ))}
      </ul>
    </div>
  );
}