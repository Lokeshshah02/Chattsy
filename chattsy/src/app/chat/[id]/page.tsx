import ChatBase from '@/components/chat/ChatBase';
import React from 'react'

export default function chat({params} : {params : {id: string}}) {
    console.log("group id is",  params.id);
    
  return (
    <div>
        <h1>Hello I am chat</h1>
        <ChatBase/>
    </div>
  )
}
