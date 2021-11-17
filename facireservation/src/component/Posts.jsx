import React, { useState, useEffect } from "react";
import firebase from "firebase";

function Posts() {
  const [post, setPost] = useState();
  useEffect(() => {
    firebase
      .database()
      .ref()
      .child("Posts")
      .on("child_added", snap => {
        snap.forEach(childsnapshot => {
          let a = childsnapshot.val();
          console.log(a);
          setPost(a);
        });
      });

    console.log(post);
  }, []);
  return (
    <div>
      {post.map(postitem => {
        return <div>{postitem.name}</div>;
      })}
    </div>
  );
}
export default Posts;
