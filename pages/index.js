import { useEffect, useState } from "react";
import axios from "axios";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Search from "../components/SVG/Search";
import User from "../components/SVG/User";
import Calendar from "../components/SVG/Calendar";
import moment from "moment";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response);
        setLoading(false);
        setPosts(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let today = new Date();
  today = moment(today).format("MMM Do YY");

  const categories = [
    {
      id: 1,
      title: "Advertising",
      items: 39,
    },
    {
      id: 2,
      title: "Creative",
      items: 48,
    },
    {
      id: 3,
      title: "Inspiration",
      items: 26,
    },
    {
      id: 4,
      title: "LifeStyle",
      items: 24,
    },
    {
      id: 5,
      title: "Music",
      items: 32,
    },
    {
      id: 6,
      title: "Photography",
      items: 69,
    },
    {
      id: 7,
      title: "Fashion",
      items: 78,
    },
    {
      id: 8,
      title: "Travel",
      items: 49,
    },
  ];

  return (
    <div>
      <Seo title="Astronaut Pickle" description="Astronaut pickle art space" />
      <Header />
      <Breadcrumb />
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-3 gap-12">
          <div className="col-span-2 grid grid-cols-2 gap-12">
            {loading && <div>Loading...</div>}
            {error && <div>Upps... An error occured.</div>}
            {posts
              .filter(
                (item) => search.length >= 0 && item.title.includes(search)
              )
              .map((post, index) => (
                <div key={index} className="bg-white shadow">
                  {photos
                    .filter((item) => item.id === post.id)
                    .map((photo) => (
                      <img
                        className="object-cover w-full"
                        style={{ height: "350px" }}
                        src={photo.url}
                        alt={photo.title}
                      />
                    ))}
                  <div className="p-4">
                    <h4 className="text-2xl">{post.title}</h4>
                    <div className="flex mt-2 mb-6">
                      {users
                        .filter((item) => item.id === post.userId)
                        .map((user) => (
                          <div className="flex items-center">
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
          </div>
          <div>
            <div className="bg-white p-4 mb-12">
              <div className="relative flex items-center bg-gray-200">
                <input
                  name={search}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  type="text"
                  placeholder="Search for blog"
                  className="appearance-none w-full bg-transparent px-4 pr-8 py-2 text-black focus:outline-none"
                />
                <Search className="absolute right-0 m-2" />
              </div>
            </div>
            <div className="bg-white p-4 mb-12">
              <p className="text-2xl uppercase">Categories</p>
              <span className="block my-2 w-16 h-px bg-black"></span>
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className={`flex justify-between border-gray-300 py-2 ${
                    categories.length === index + 1 ? "" : "border-b"
                  }`}
                >
                  <p>{category.title}</p>
                  <span className="text-gray-400">{category.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
