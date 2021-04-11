import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";

export default function RecentComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        setComments(response.data.slice(0, 5));
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  }, []);
  https: return (
    <div className="bg-white p-4 mb-12">
      <Title title="Recent Comments" />
      {comments.map((comment, index) => (
        <div
          key={comment.id}
          className={`py-4 border-gray-300 ${
            comments.length === index + 1 ? "" : "border-b"
          }`}
        >
          <p>
            <a
              className="hover:underline"
              href={`mailto:${comment.email.toLowerCase()}`}
            >
              {comment.name}
            </a>{" "}
            <span className="text-green-500">on</span> {comment.body}
          </p>
        </div>
      ))}
    </div>
  );
}
