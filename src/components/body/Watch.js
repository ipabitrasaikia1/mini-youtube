import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";


function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu());
    return () => {
      dispatch(toggleMenu());
    };
  }, []);
  return (
    <div className="px-5 flex flex-col ">
      <iframe
        width="1200"
        height="570   "
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer/>
    </div>
  );
}

export default Watch;
