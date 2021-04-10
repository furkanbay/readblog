import Link from "next/link";
import Instagram from "./SVG/Instagram";
import Facebook from "./SVG/Facebook";
import Twitter from "./SVG/Twitter";
import Linkedin from "./SVG/Linkedin";
import Youtube from "./SVG/Youtube";

export default function Footer() {
  return (
    <div className="bg-white p-4">
      <footer className="container mx-auto flex items-center justify-between">
        <div className="mb-4">
          Copyright © 2016{" "}
          <Link href="/">
            <a className="rb-link">
              ReadBlog
            </a>
          </Link>
          . All Rights Reserved. Designed by{" "}
          <a
            className="rb-link"
            href="#"
          >
            Anthony
          </a>
          .
        </div>
        <div className="flex items-center">
          <a
            className="mx-2 text-gray-600 hover:text-green-600"
            href="https://www.instagram.com/#"
          >
            <Instagram />
          </a>
          <a
            className="mx-2 text-gray-600 hover:text-green-600"
            href="https://www.instagram.com/#"
          >
            <Facebook />
          </a>
          <a
            className="mx-2 text-gray-600 hover:text-green-600"
            href="https://www.instagram.com/#"
          >
            <Twitter />
          </a>
          <a
            className="mx-2 text-gray-600 hover:text-green-600"
            href="https://www.instagram.com/#"
          >
            <Linkedin />
          </a>
          <a
            className="mx-2 text-gray-600 hover:text-green-600"
            href="https://www.instagram.com/#"
          >
            <Youtube />
          </a>
        </div>
      </footer>
    </div>
  );
}
