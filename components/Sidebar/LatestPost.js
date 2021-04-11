import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import Title from "./Title";
import useFetch from "../../utils/useFetch";

export default function LatestPost() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { response: postsRes, error, loading } = useFetch({
    method: "get",
    extent: "/posts",
  });
  const { response: photosRes } = useFetch({
    method: "get",
    extent: "/photos",
  });

  useEffect(() => {
    postsRes && postsRes.length > 0 && setPosts(postsRes.slice(0, 5));
  }, [postsRes]);
  useEffect(() => {
    setPhotos(photosRes);
  }, [photosRes]);

  let today = new Date();
  today = moment(today).format("D MMMM, YYYY");

  return (
    <div className="bg-white p-4 mb-12">
      <Title title="Latest Post" />

      {posts &&
        posts.map((post) => (
          <div
            key={post.id}
            className="grid grid-cols-3 items-center gap-4 my-4"
          >
            {photos &&
              photos
                .filter((item) => item.id === post.id)
                .map((photo) => (
                  <Link key={photo.id} href={"/blog/" + post.id}>
                    <a>
                      <img
                        className="object-cover w-full"
                        src={photo.url}
                        alt={photo.title}
                      />
                    </a>
                  </Link>
                ))}
            <div className="col-span-2">
              <Link href={"/blog/" + post.id}>
                <a>
                  <p className="text-xl capitalize">{post.title}</p>
                </a>
              </Link>
              <p className="text-gray-500 italic">{today}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
