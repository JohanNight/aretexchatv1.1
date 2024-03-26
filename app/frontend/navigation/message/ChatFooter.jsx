import React from "react";
import { Button } from "@nextui-org/react";
import { MdFilePresent, MdSend } from "react-icons/md";
const ChatFooter = () => {
  return (
    <div className=" px-4 py-4 border-t border-gray-300">
      <div className="flex justify-center items-center">
        <textarea
          name=""
          placeholder="Enter Message"
          className=" border-2  w-full h-full px-2 py-1 overflow-y-hidden focus:outline-none text-xs md:text-sm rounded-lg resize-none "
        />
        <Button
          size="md"
          radius="full"
          isIconOnly
          className="bg-transparent p-0"
        >
          <MdFilePresent size={25} color="#f28f33" />
        </Button>

        <Button
          size="md"
          radius="full"
          isIconOnly
          className="bg-transparent p-0"
        >
          <MdSend size={25} color="blue" />
        </Button>
      </div>
    </div>
  );
};

export default ChatFooter;
