import React from 'react'
import {MdCall, MdClose,MdMinimize } from "react-icons/md";

import { 
    Avatar,
    Badge,
    Button,
} from "@nextui-org/react";

const ChatHeader = ({name,image,status,onClose}) => {
  return (
    <div className='w-full border-2 flex justify-between items-center pt-2 pb-1 px-2 bg-transparent'>
        <div className='flex items-center gap-2 w-full'>
            {status? (
                <Badge content='' color='success' shape='circle' placement='bottom-right'>
                    <Avatar src={image} radius='full' size='md'/>
                </Badge>
            ):(
                <Avatar src={image} radius='full' size='md'/>
            )}
            <div className='flex flex-col'>
                <p className="font-extrabold text-sm md:text-[14px] leading-tight">{name ? name :"userName"}</p>
                <p className="font-normal text-sm truncate ">{status? 'Active' : 'Inactive'}</p>
            </div>
        </div>
        <div className='flex flex-row'>
            <Button isIconOnly className='p-0 bg-transparent'>
                <MdCall size={20}/>
            </Button>
            <Button isIconOnly className='p-0 bg-transparent'>
                <MdMinimize size={20}/>
            </Button>
            <Button isIconOnly className='p-0 bg-transparent' onClick={onClose}>
                <MdClose size={20}/>
            </Button>
        </div>
    </div>
  )
}

export default ChatHeader
