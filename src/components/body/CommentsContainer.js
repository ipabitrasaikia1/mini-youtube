import React from "react";
import Comment from "./Comment";
const commentsData = [
  {
    name: "User - 1",
    text: "Nice one!!",
    replies: [],
  },
  {
    name: "User - 2",
    text: "Hi This is awesome",
    replies: [
      {
        name: "Account Admin",
        text: "Thanks😊",
        replies: [
          {
            name: "Random User - 1",
            text: "+1",
            replies: [],
          },
          {
            name: "Random user - 2",
            text: "👌",
            replies: [
              {
                name: "Random user - 3",
                text: "Could be better btw!!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "User - 3",
        text: "Can we add comments",
        replies: [
          {
            name: "Account Admin",
            text: "No. These are just mock comments.",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black pl-5" >
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};
function CommentsContainer() {
  return (
    <div className="m-2 p-4">
      <h1 className="text-lg font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
