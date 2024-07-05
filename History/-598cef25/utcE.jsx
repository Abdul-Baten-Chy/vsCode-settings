import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    const c = Math.floor(Math.random() * 10);

    async function startFetching() {
      const json = await fetchComments(postId);
      console.log("before condoition", Math.floor(Math.random() * 10));
      if (!ignore) {
        console.log("inside condoition", ignore, c);
        setComments(json);
      }
    }

    startFetching();
    console.log("nnn", ignore + "sec");
    return () => {
      console.log("inside cleanup");
      ignore = true;
      console.log("inside cleanup", ignore);
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
