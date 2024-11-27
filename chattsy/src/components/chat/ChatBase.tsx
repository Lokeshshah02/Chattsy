"use client";

import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import ChatSidebar from "./ChatSidebar";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialog";
import Chats from "./Chats";
// import { Button } from "../ui/button";

export default function ChatBase({
  group,
  users,
  oldMessages
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
  oldMessages: Array<MessageType> |  []
}) {
  // Below code is for demo using socket and send button

  // let socket = useMemo(() => {
  //   const socket = getSocket();
  //   // adding auth parameter
  //   socket.auth ={
  //     room: groupId
  //   }
  //   return socket.connect();
  // }, []);

  // useEffect(() => {
  //   socket.on("message", (data: any) => {
  //     console.log("The socket message is", data);
  //   });

  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  // const handleClick = () =>{
  //   socket.emit("message" , {name : "Lokesh", id:uuidV4()})
  // }

  const [open, setOpen] = useState(true)
  const [chatUser, setChatUser] = useState<GroupChatUserType>()

  useEffect(()=>{
    const data = localStorage.getItem(group.id)
    if(data){
      const pData = JSON.parse(data)
      setChatUser(pData)
    }
  },[group.id])

  return (
    <div className="flex">
      {/* <Button onClick={handleClick}>Send Message</Button> */}
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from bg-gray-50 to-white">
      {open ? (<ChatUserDialog open={open} setOpen={setOpen} group={group}/>) : (
        <ChatNav chatGroup={group} users={users}/>

      )}
        
       <Chats group={group} chatUser={chatUser} oldMessages={oldMessages}/>
      </div>
    </div>
  );
}
