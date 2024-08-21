import Image from "next/image";

export default function Page() {
  return (
    <section>
      <a href="https://x.com/1tssirius" target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Portfolio, made simple!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-5">
          A clean, fast, and simple portfolio template built with Next.js,
          Vercel, and Tailwind CSS for great performance.
        </p>
        <p className="mb-5">
          Nextfolio includes all the essentials for a stunning portfolio: SEO,
          MDX support, RSS, Atom, & JSON feeds, analytics, tweet & YouTube
          embeds, KaTeX integration,{" "}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p className="mb-3">
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>

        <p className="pt-5">
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p>
      </div>
    </section>
  );
}
