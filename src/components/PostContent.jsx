import React from "react";
import Post from "./Post";

var masterPostList = [
  {
    image: 'https://via.placeholder.com/50x50',
    title: "Lorem Ipsum",
    content: "Lorem ipsum asoifhoaiehfoiafhaiofoafhafoiahfiosahoih"
  },
  {
    image: 'https://via.placeholder.com/50x50',
    title: "Lorem Ipsum",
    content: "Lorem ipsum asoifhoaiehfoiafhaiofoafhafoiahfiosahoih",
    comment: "Lorem Ipsum"
  },
  {
    image: 'https://via.placeholder.com/50x50',
    title: "Lorem Ipsum",
    content: "Lorem ipsum asoifhoaiehfoiafhaiofoafhafoiahfiosahoih"
  },
  {
    image: 'https://via.placeholder.com/50x50',
    title: "Lorem Ipsum",
    content: "Lorem ipsum asoifhoaiehfoiafhaiofoafhafoiahfiosahoih"
  },
]


function PostContent(){
  return (
    <div>
      { masterPostList.map((post, index) =>
        <Post image={ post.image }
              title={ post.title}
              content={ post.content }
              comment={ post.comment }
              key={ index }/>
      )}
    </div>
  );
}

export default PostContent;
