import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Sidebar from "../../components/Sidebar";
import User from "../../components/SVG/User";
import Calendar from "../../components/SVG/Calendar";
import useFetch from "../../utils/useFetch";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function SingleBlog({ post }) {
  const [comments, setComments] = useState([]);

  const { response: commentsRes, error, loading } = useFetch({
    method: "get",
    extent: "/comments",
  });

  useEffect(() => {
    setComments(commentsRes);
  }, [commentsRes]);

  return (
    <div>
      <Seo title="Read Blog" description="We love creativity minimal blog." />
      <Header />
      <Breadcrumb title={post.title} />
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start">
          <div className="col-span-2 ">
            <h1 className="text-3xl capitalize mb-4">{post.title}</h1>
            {post.body}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${API_URL}/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default SingleBlog;
