import React from "react";
import { useAtom } from "jotai";
import { MdChatBubbleOutline, MdChatBubble } from "react-icons/md";

import {
  unreadMesageCountAtom,
  messageOpenAtom,
  messagesAtom,
} from "../store/ChatStore";

import {
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import MessageChatHeader from "./MessageChatHeader";
import MessageChatList from "./MessageChatList";
import MessageFooter from "./MessageFooter";

const MessageDropDown = () => {
  const [Messages] = useAtom(messagesAtom);
  const [messagesOpened, setMessagesOpened] = useAtom(messageOpenAtom);
  const [unreadMessagesCount, setUnreadMessagesCount] = useAtom(unreadMesageCountAtom);

  return (
    <div>
      <Badge
        shape="circle"
        content={unreadMessagesCount.all}
        isInvisible={unreadMessagesCount === 0}
      >
        <Popover
          placement="bottom-end"
          showArrow={true}
          onOpenChange={(open) => {
            setMessagesOpened(!open);

            setUnreadMessagesCount({
              all: Messages.filter((message) => {
                return message.unread;
              }).length,
              friends: Messages.filter((message) => {
                return message.type.includes("friend");
              }).filter((message) => {
                return message.unread;
              }).length,
              groups: Messages.filter((message) => {
                return message.type.includes("groups");
              }).filter((messages) => {
                return messages.unread;
              }).length,
            });
          }}
        >
          <PopoverTrigger>
            <Button isIconOnly className="bg-transparent">
              {messagesOpened ? (
                <MdChatBubbleOutline size={24} color="white" />
              ) : unreadMessagesCount.all === 0 ? (
                <MdChatBubble size={24} fill="orange" />
              ) : (
                <MdChatBubble size={24} fill="orange" />
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent>
                <MessageChatHeader/>
                <MessageChatList/>
                <MessageFooter/>
          </PopoverContent>
        </Popover>
      </Badge>
    </div>
  );
};

export default MessageDropDown;
