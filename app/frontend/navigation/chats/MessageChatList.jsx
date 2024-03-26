import React, { useState } from "react";
import { useAtom } from "jotai";

import {
  messagesAtom,
  showUnreadMessageAtom,
  messageTypeAtom,
  messageOpenAtom,
} from "../store/ChatStore";

import { Listbox, ListboxItem, Avatar, Badge } from "@nextui-org/react";

import { VscBlank } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";



const MessageChatList = ({onMessageClick}) => {
  const [showUnreadMessages] = useAtom(showUnreadMessageAtom);
  const [messageType] = useAtom(messageTypeAtom);
  const [messageOpen, setMessageOpen] = useAtom(messageOpenAtom);
  const [messages, setMessages] = useAtom(messagesAtom);


  const unReadMessages = showUnreadMessages
    ? messages.filter((notification) => {
        return notification.unread === showUnreadMessages;
      })
    : messages;

  const filteredMessages =
    messageType === "all"
      ? unReadMessages
      : unReadMessages.filter((notification) => {
          return notification.type.includes(messageType);
        });

  return (
    <>
      <Listbox
        items={filteredMessages}
        aria-label="Chat Messages"
        onAction={(item) => onMessageClick(item)}
        className=""
      >
        {(item)=>(
            <ListboxItem
            textValue={item.name}
            key={item.id}
            endContent={
                item.unread ? (
                    <div className="text-blue-400">
                        <RxDotFilled size={25}/>
                    </div>
                ) :(
                    <div>
                        <VscBlank size={22}/>
                    </div>
                )
            }>
                {item.unread ? (
                    <div key={item.id} className="flex gap-4 items-center">
                        <div className="">
                            {item.isOnline ? ( 
                                <Badge content=""
                                color="success"
                                shape="circle"
                                placement="bottom-right">
                                    <Avatar src={item.userImage} radius="full" size="md"/>
                                </Badge>
                            ):(
                                <Avatar src={item.userImage} radius="full" size="md"/>
                            )}
                        </div>
                        <div className="flex flex-col gap-1 whitespace-pre-line">
                            <div>
                                <p className="font-extrabold text-sm md:text-[14px] leading-tight">
                                    {item.name}
                                </p>
                            </div>
                            <div className="flex w-full justify-between items-center gap-1 overflow-hidden ">
                                <p className="font-semibold text-sm truncate">
                                    {item.message}
                                </p>
                                <p className="font-semibold text-xs text-gray-700" >
                                    {item.dateTime}
                                </p>
                            </div>
                        </div>
                    </div>
                ) :
                (<div key={item.id} className="flex gap-4 items-center">
                    <div>
                        {item.isOnline ? ( 
                            <Badge content=""
                            color="success"
                            shape="circle"
                            placement="bottom-right">
                                <Avatar src={item.userImage} radius="full" size="md"/>
                            </Badge>)
                            :( <Avatar src={item.userImage} radius="full" size="md"/>
                            )}
                    </div>
                    <div className="flex flex-col gap-1 whitespace-pre-line">
                            <div className="font-extrabold text-sm md:text-[14px] leading-tight">
                                <p className="font-extrabold text-sm md:text-[14px] leading-tight">
                                    {item.name}
                                </p>
                            </div>
                            <div className="flex w-full justify-between items-center gap-1 overflow-hidden ">
                                <p className="font-medium text-sm truncate text-gray-500">
                                    {item.message}
                                </p>
                                <p className="font-medium  text-xs text-gray-400" >
                                    {item.dateTime}
                                </p>
                            </div>
                    </div>
                </div>)}

            </ListboxItem>
        )}
        {/* {(item) => {
          <ListboxItem
            textValue={item.name}
            key={item.id}
            endContent={
              item.unread ? (
                <div className="text-blue-default">
                  <RxDotFilled size={25} />
                </div>
              ) : (
                <div className="text-blue-default">
                  <VscBlank size={22} />
                </div>
              )
            }
          >
            {item.unread ? (
              <div key={item.id} className="flex gap-4 items-center">
                <div className=" flex-col">
                  {item.isOnline === true ? (
                    <Badge
                      content=""
                      color="success"
                      shape="circle"
                      placement="bottom-right"
                    >
                      <Avatar src={item.userImage} radius="full" size="lg" />
                    </Badge>
                  ) : (
                    <Avatar src={item.userImage} radius="full" size="lg" />
                  )}
                </div>
                <div className="flex flex-col gap-1  whitespace-pre-line">
                  <p className="font-extrabold text-sm md:text-[14px] leading-tight">
                    {item.name}
                  </p>
                  <div className="flex flex-row items-center gap-1 overflow-hidden whitespace-pre-line">
                    <p className="font-semibold  text-sm truncate ">
                      {item.message}
                    </p>
                    <p className="font-semibold text-xs text-gray-700">
                      {item.dateTime}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.id} className="flex gap-4 items-center">
                <div className=" flex-col">
                  {item.isOnline === true ? (
                    <Badge
                      content=""
                      color="success"
                      shape="circle"
                      placement="bottom-right"
                    >
                      <Avatar src={item.userImage} radius="full" size="lg" />
                    </Badge>
                  ) : (
                    <Avatar src={item.userImage} radius="full" size="lg" />
                  )}
                </div>
                <div className="flex flex-col gap-1  whitespace-pre-line">
                  <p className="font-extrabold text-sm md:text-[14px] leading-tight">
                    {item.name}
                  </p>
                  <div className="flex flex-row items-center gap-1 overflow-hidden whitespace-pre-line">
                    <p className="font-semibold  text-sm truncate ">
                      {item.message}
                    </p>
                    <p className="font-semibold text-xs text-gray-700">
                      {item.dateTime}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </ListboxItem>;
        }} */}
      </Listbox>
    </>
  );
};



export default MessageChatList;
