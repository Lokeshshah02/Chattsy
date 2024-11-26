"use client";

import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import ChatSidebar from "./ChatSidebar";
import ChatNav from "./ChatNav";
// import { Button } from "../ui/button";

export default function ChatBase({
  group,
  users,
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
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

  return (
    <div className="flex">
      {/* <Button onClick={handleClick}>Send Message</Button> */}
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from bg-gray-50 to-white">
      <ChatNav chatGroup={group} users={users}/>
      </div>
    </div>
  );
}
