import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Our Blog</h1>
      <BlogPosts />
    </section>
  );
}
