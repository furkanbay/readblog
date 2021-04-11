import { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import User from "../components/SVG/User";
import Calendar from "../components/SVG/Calendar";
import useFetch from "../utils/useFetch";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const pages = [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  for (let i = 1; i < Math.ceil(filteredPosts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const { response: postsRes, error, loading } = useFetch({
    method: "get",
    extent: "/posts",
  });
  const { response: usersRes } = useFetch({
    method: "get",
    extent: "/users",
  });
  const { response: photosRes } = useFetch({
    method: "get",
    extent: "/photos",
  });

  useEffect(() => {
    setPosts(postsRes);
    setFilteredPosts(postsRes);
  }, [postsRes]);
  useEffect(() => {
    setUsers(usersRes);
  }, [usersRes]);
  useEffect(() => {
    setPhotos(photosRes);
  }, [photosRes]);

  useEffect(() => {
    setFilteredPosts(posts.filter((post) => post.title.includes(search)));
  }, [search]);

  let today = new Date();
  today = moment(today).format("D MMM, YYYY");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Seo title="Read Blog" description="We love creativity minimal blog." />
      <Header />
      <Breadcrumb title="Blog two column with right sidebar" />
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start">
          <div className="col-span-2 md:grid md:grid-cols-2 gap-12">
            {loading && <div>Loading...</div>}
            {error && <div>Upps... An error occured.</div>}
            {currentItems.length === 0 && (
              <div>
                <b>"{search}"</b> not found. Either this doesn’t exist yet or
                it’s spelled differently.
              </div>
            )}
            {currentItems &&
              currentItems.map((post) => (
                <div key={post.id} className="bg-white shadow mb-4 md:mb-0">
                  {photos &&
                    photos
                      .filter((item) => item.id === post.id)
                      .map((photo) => (
                        <Link key={photo.id} href={"/blog/" + post.id}>
                          <a>
                            <img
                              className="object-cover w-full"
                              style={{ height: "350px" }}
                              src={photo.url}
                              alt={photo.title}
                            />
                          </a>
                        </Link>
                      ))}
                  <div className="p-4">
                    <Link href={"/blog/" + post.id}>
                      <a>
                        <h4 className="text-2xl capitalize">{post.title}</h4>
                      </a>
                    </Link>
                    <div className="flex mt-2 mb-6">
                      {users &&
                        users
                          .filter((item) => item.id === post.userId)
                          .map((user) => (
                            <div key={user.id} className="flex items-center">
                              <User className="text-green-500 mr-2" />
                              Posted by {user.name}
                            </div>
                          ))}
                      <div className="flex items-center ml-12">
                        <Calendar className="text-green-500 mr-2" />
                        {today}
                      </div>
                    </div>
                    <p>{post.body}</p>
                  </div>
                </div>
              ))}
            <div className="flex col-span-2">
              {pages.map((item) => (
                <div
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`cursor-pointer px-1 mx-1 py-1 ${
                    item === currentPage
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Sidebar search={search} handleChange={handleChange} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
