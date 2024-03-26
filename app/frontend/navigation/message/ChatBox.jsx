import React,{useEffect} from 'react'
import { messagesAtom, messageOpenAtom } from '../store/ChatStore'
import {useAtom} from 'jotai';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatBox = ({message , onClose}) => {
    const [sendersMessage] = useAtom(messagesAtom);
    const [messageOpened] = useAtom(messageOpenAtom);

    const getMessage = sendersMessage.find((e)=>{
        e.id === message
        return e.id
    })


  return (
    <div className='fixed bottom-4 right-4'>
        <div className='bg-white border border-gray-300 rounded- shadow w-96 h-96 flex flex-col'>
            <ChatHeader className="h-1/6" 
            name={getMessage ? getMessage.name : ''  }
            image={getMessage  ? getMessage.userImage : ''  }
            status={getMessage ? getMessage.isOnline : '' }
            onClose={onClose}/>
            <ChatBody className="flex-1"
            message={getMessage? getMessage.message : ''}/>
            <ChatFooter className="h-1/6"/>
        </div>
        
    </div>
  )
}

export default ChatBox
