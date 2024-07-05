import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    const c = Math.floor(Math.random() * 10);
    console.log(c, "c"); //0,2

    async function startFetching() {
      const json = await fetchComments(postId);
      if (!ignore) {
        console.log("inside condoition", ignore, c);
        setComments(json);
      }
    }
    startFetching();
    return () => {
      ignore = true;
      console.log("inside cleanup", ignore, c); //0,2,5
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
