"use client";

import React, { useState } from 'react'
import NavigationBar from './navigation/NavigationBar'
import ChatBox from './navigation/message/ChatBox';
import {
  messageOpenAtom,
} from "./navigation/store/ChatStore";
import{useAtom} from 'jotai';
;

const Page = () => {

  const [messageOpen, setMessageOpen] = useAtom(messageOpenAtom)
  const[selectedMessage,setSelectedMessage] = useState(null);
  const [chats,setChats] = useState([]);

  const openedChatBox =(message)=>{
    setSelectedMessage(message);
    setMessageOpen(true);
  }

  return (
    <div>
      <NavigationBar onMessageClick={openedChatBox}/>
      {messageOpen && <ChatBox message={selectedMessage} onClose={()=>setMessageOpen(false)}/>}
    </div>
    
  )
}

export default Page
