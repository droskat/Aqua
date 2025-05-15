import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="/blog/new">Write a Blog</Link>
      <div>
        {/* Fetch and display blogs here */}
        <p>Blog 1</p>
        <p>Blog 2</p>
      </div>
    </div>
  );
}