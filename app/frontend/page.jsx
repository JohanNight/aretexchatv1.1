import React, { useState } from 'react'
import NavigationBar from './navigation/NavigationBar'
import ChatBox from './navigation/message/ChatBox';
import {
  messageOpenAtom,
} from "./navigation/store/ChatStore";
import{useAtom, useAtomValue} from 'jotai';

const Page = () => {

  const [messageOpen, setMessageOpen] = useAtom(messageOpenAtom)
  const[selectedMessage,setSelectedMessage] = useState(null);

  const openedChatBox = (message) => {
    console.log(message);
    setSelectedMessage(message);
    setMessageOpen(true);
  };

  return (
    <div>
      <NavigationBar onMessageClick={openedChatBox} />
      {messageOpen && (
        <ChatBox
          message={selectedMessage}
          onClose={() => setMessageOpen(!messageOpen)}
        />
      )}
    </div>
  )
}

export default Page;
