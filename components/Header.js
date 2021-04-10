import { useState } from "react";
import Link from "next/link";
import Logo from "./SVG/Logo";
import Arrow from "./SVG/Arrow";

export default function Header() {
  // const [show, setShow] = useState(false);
  const menuItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Features",
      url: "/",
      subItems: [
        {
          id: 1,
          title: "Feature 1",
          url: "/",
        },
        {
          id: 2,
          title: "Feature 2",
          url: "/",
        },
        {
          id: 3,
          title: "Feature 3",
          url: "/",
        },
      ],
    },
    {
      id: 3,
      title: "Single Post",
      url: "/",
    },
    {
      id: 4,
      title: "Categories",
      url: "/",
      subItems: [
        {
          id: 1,
          title: "Category 1",
          url: "/",
        },
        {
          id: 2,
          title: "Category 2",
          url: "/",
        },
        {
          id: 3,
          title: "Category 3",
          url: "/",
        },
      ],
    },
    {
      id: 5,
      title: "About",
      url: "/",
    },
    {
      id: 6,
      title: "Contact",
      url: "/",
    },
  ];
  return (
    <div className="bg-white">
      <div className="flex justify-center border-b border-gray-300 py-6">
        <Logo />
      </div>
      <div className="container mx-auto flex items-center justify-center">
        {menuItems.map((item) => (
          <Link href={item.url} key={item.id}>
            <a className="px-6 py-4 uppercase flex items-center relative header-link hover:bg-green-100">
              {item.title}
              {item.subItems && <Arrow className="ml-2" />}
              {item.subItems && (
                <div className="absolute right-0 top-full bg-white shadow-md invisible opacity-0 transition duration-200 ease-in-out header-sub-link">
                  {item.subItems.map((sub) => (
                    <Link href={sub.url} key={sub.id}>
                      <a className="px-4 py-2 block whitespace-nowrap hover:bg-gray-200">
                        {sub.title}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
