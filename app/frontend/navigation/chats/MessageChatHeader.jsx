import React from "react";

import {
  unreadMesageCountAtom,
  messageTypeAtom,
  messageTabsAtom,
} from "../store/ChatStore";

import { Button, Input, Tabs, Tab } from "@nextui-org/react";

import { BsThreeDots } from "react-icons/bs";
import { BiSolidEdit, BiExpand } from "react-icons/bi";

import { useAtom } from "jotai";

const MessageChatHeader = () => {
  const [messageType, setMessageType] = useAtom(messageTypeAtom);
  const [messageTabs] = useAtom(messageTabsAtom);

  const sizes = ["xs"];
  const radius = ["lg"];

  return (
    <div className="flex flex-col pt-2 px-1 w-full">
      <div className="flex justify-between items-center pl-4  pb-0 gap-5 md:gap-10 ">
        <p className="text-lg md:text-xl font-extrabold">{"Aretex Chat"}</p>
        <div className="flex  items-center ml-1">
          <Button isIconOnly className="bg-transparent p-0">
            <BsThreeDots size={20} color="gray" />
          </Button>
          <Button isIconOnly className="bg-transparent p-0">
            <BiExpand size={20} color="gray" />
          </Button>
          <Button isIconOnly className="bg-transparent p-0">
            <BiSolidEdit size={20} color="gray" />
          </Button>
        </div>
      </div>

      <div className="w-full px-1 py-1">
        {sizes.map((size) => (
          <div key={size} className="flex w-full  mb-6 md:mb-0 ">
            <Input
              size={size}
              radius={radius}
              type="email"
              placeholder="Search"
              className="rounded-full"
            />
          </div>
        ))}
      </div>

      <Tabs
            selectedKey={messageType}
            onSelectionChange={setMessageType}
            aria-label='Message Notification Label'
            variant='underlined'
            className={{
                base:"pl-4 py-0 ",
                tabList:"gap-6 w-full relative rounded-none p-0 ",
                tab: "max-w-fit px-0 h-12 ",
                tabContent:
                "group-data-[selected=true]:text-orange-default text-black-default/90",
                cursor: "w-full bg-orange-default",
            }}>
                {messageTabs.map((tab)=>(
                    <Tab 
                        key={tab.key}
                        title={
                            <div className='flex  items-center space-x-2 '>
                                <span className='font-bold'>{tab.title}</span>
                            </div>
                        }>
                    </Tab>
                ))}
        </Tabs>
    </div>
  );
};

export default MessageChatHeader;
