import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    const c = Math.floor(Math.random() * 10);
    console.log(c, "c"); //5,7

    async function startFetching() {
      const json = await fetchComments(postId);
      if (!ignore) {
        console.log("inside condoition", ignore, c);
        setComments(json);
      }
    }
    console.log("me");
    startFetching();
    return () => {
      ignore = true;
      console.log("inside cleanup", ignore, c);
    };
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.name} {console.log("me")}
        </li>
      ))}
    </ul>
  );
}
