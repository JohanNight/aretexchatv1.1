import React from 'react'
import { messagesAtom } from '../store/ChatStore'
import { useAtom } from 'jotai';
import { Button } from "@nextui-org/react";
const MessageFooter = () => {
    return (
        <div className='flex flex-row pt-1 '>
          <div className='flex items-center justify-center mx-4 py-0 px-3 pt-2 pb-2 border-t-2 border-black-default/70 w-full'>
            <Button
            variant="light"
            disableRipple={true}
            disableAnimation={true}
            className="py-0 bg-transparent data-[hover=true]:bg-transparent">
              <p className="font-extrabold text-md hover:underline hover:underline-offset-2">
                {"See All Messages"}
              </p>
              {/* TODO Create another modal window to see all messages */}
            </Button>
          </div>
          
        </div>
      )
}

export default MessageFooter
