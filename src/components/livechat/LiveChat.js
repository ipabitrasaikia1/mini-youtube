import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../../utils/chatSlice";
import { generateRandomName } from "../../utils/helper/nameGenerator";
import { generateRandomChat } from "../../utils/helper/chatGenerator";
const LiveChat = () => {
    const dispatch = useDispatch()
    const messages = useSelector(store => store.liveChat.messages)
    useEffect(() => {
     const timer = setInterval(()=> {
        //Api polling 
        dispatch(addLiveChat({
            name: generateRandomName(),
            message: generateRandomChat()
        }))
     }, 2000)
     return () => clearInterval(timer)
    }, [])
  return (
    <div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
     {messages.map((c, i) =>  <ChatMessage key={i} name={c.name} message={c.message}/> )}
    </div>
  );
};

export default LiveChat;
