import Image from 'next/image'
import { socialLinks } from './config'

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
          This is my personal blog where I share things I wish I had known earlier. I document my
          musings, writings, and experiences. I like to distill what I learn into principles
          because, as Ray Dalio puts it, life is a lot of "another one of those" - and distilling
          principles makes things easier.
        </p>
        <p>
          I'm the founder of A.I. Podcasting, a bootstrap startup where our goal is to enable
          podcasters to tell their stories without getting fuddled by all the technical processes
          that come after they record their podcasts. We power this through AI-driven solutions.
        </p>
        <p>
          Though not formally trained as an AI engineer, I got totally hooked when ChatGPT was
          released. One of my friends sat me down and introduced me to it right when it launched.
          Three or four months later, I quit my job to pursue AI, despite having no formal training.
          I've been learning on the ropes ever since.
        </p>
        <p>
          You can think of me as an AI thinker rather than a researcher - someone who likes to
          fiddle with the tools and explore practical applications. I'm passionate about blending
          technology and creativity, particularly in making complex technical processes more
          accessible.
        </p>
        <p>
          I plan to write more regularly about AI, entrepreneurship, technology, and personal
          growth. If you have thoughts or want to connect, please feel free to{' '}
          <a href={socialLinks.email}>reach out</a>.
        </p>
      </div>
    </section>
  )
}
