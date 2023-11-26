import React from "react";
import Comment from "./Comment";
const commentsData = [
  {
    name: "AK-47",
    text: "Jai hind",
    replies: [],
  },
  {
    name: "Pabitra",
    text: "Hi This is awesome",
    replies: [
      {
        name: "Palash",
        text: "Chal Jhuthey",
        replies: [
          {
            name: "Dibya",
            text: "+1",
            replies: [],
          },
          {
            name: "Pabitra",
            text: "Its true bro",
            replies: [
              {
                name: "Palash",
                text: "Thike hain fir!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Herok",
        text: "Kio bro kio ??",
        replies: [
          {
            name: "Pabitra",
            text: "Chill bro !",
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
