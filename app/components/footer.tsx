"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { TITLE } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href="https://x.com/1tssirius" icon={FaXTwitter} />
      <SocialLink
        href="https://github.com/1msirius/Nextfolio"
        icon={FaGithub}
      />
      <SocialLink href="https://www.instagram.com/" icon={FaInstagram} />
      <SocialLink href="https://www.linkedin.com/" icon={FaLinkedinIn} />
      <SocialLink href="mailto:example@gmail.com" icon={TbMailFilled} />
      <a href="/feed.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href="https://github.com/1msirius/Nextfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        {TITLE}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
