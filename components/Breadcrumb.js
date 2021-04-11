import Link from "next/link";
import Logo from "./SVG/Logo";
import Arrow from "./SVG/Arrow";

export default function Breadcrumb({ title }) {
  return (
    <div className="bg-gray-900 text-white px-4 py-12 breadcrumb">
      <div className="container mx-auto">
        <h1 className="text-3xl mb-4">Blog</h1>
        <p>
          Home <span className="mx-2">/</span> Blog{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-green-300 capitalize">{title}</span>
        </p>
      </div>
    </div>
  );
}
