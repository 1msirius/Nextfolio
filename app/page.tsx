import Image from 'next/image'
import Link from 'next/link'
import { socialLinks } from './config'

/**
 * Homepage component
 *
 * Displays a brief introduction with profile image and a link to the about page
 *
 * @returns {JSX.Element} The rendered homepage
 */
export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 border border-neutral-200 dark:border-neutral-700 p-1"
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Hello, I'm Adithyan Ilangovan</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to my personal blog where I share things I wish I had known earlier. I'm the
          founder of A.I. Podcasting, a bootstrap startup that uses AI to help podcasters tell their
          stories without technical complications. I'm passionate about AI, entrepreneurship, and
          making complex technical processes more accessible.
        </p>
        <p>
          <Link
            href="/about"
            className="font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
          >
            Read more about me →
          </Link>
        </p>
      </div>
    </section>
  )
}
