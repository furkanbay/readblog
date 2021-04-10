import { useEffect, useState } from "react";
import axios from "axios";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        setPosts(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <Seo title="Astronaut Pickle" description="Astronaut pickle art space" />
      <Header />
      <Breadcrumb />
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-3 gap-12">
          <div className="col-span-2 grid grid-cols-2 gap-12">
            {posts.map((post) => (
              <div className="bg-white">
                {/* <img src="" alt=""/> */}
                <div className="p-4">
                  <h4 className="text-2xl">{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
