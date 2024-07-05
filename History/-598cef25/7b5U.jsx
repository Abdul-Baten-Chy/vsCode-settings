import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await fetchComments(postId);
      console.log("before condoition" Math.random(10));
      if (!ignore) {
        console.log("inside condoition");
        setComments(json);
      }
    }

    startFetching();

    return () => {
      console.log("inside cleanup");
      ignore = true;
    };
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}
