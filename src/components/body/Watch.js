import React, { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "../livechat/LiveChat";
import { addLiveChat } from "../../utils/chatSlice";
import { useState } from "react";

function Watch() {
  const liveMessage = useRef(null);
  const [mssg, setMssg] = useState('');
  const [searchParams] = useSearchParams();
 
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu());
    return () => {
      dispatch(toggleMenu());
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault()
    dispatch(addLiveChat({
      name:"Notun Manuh",
      message: liveMessage.current.value
    }));
    liveMessage.current.value=""
    setMssg('')
  };
  return (
    <div className="px-5 flex flex-col w-full">
      <div className="px-5 flex ">
        <iframe
          className="w-9/12"
          // width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="w-3/12">
          <span className="m-2 font-bold">LiveChat</span>
          <LiveChat />
          <div className="w-full px-2 m-2 rounded-lg border border-black">
            <form onSubmit={handleSendMessage}>
              <input
                ref={liveMessage}
                value={mssg}
                onChange={(e) => setMssg(e.target.value)}
                type="text"
                placeholder="Enter here"
                className="w-8/12 bg-slate-100 p-2 m-2 rounded-sm"
              />{" "}
              <button
                type="submit"
                className="px-2 mx-2 bg-green-200 rounded-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
}

export default Watch;
