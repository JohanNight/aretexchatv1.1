import {atom} from "jotai"

export const showUnreadMessageAtom = atom(false);
export const messageOpenAtom = atom(false);
export const messageTypeAtom = atom("all");
export const selectedMessageAtom = (0);

export const messagesAtom = atom([
{
    id: 1,
    type:["friend"],
    isGroup:false,
    dateTime:"1hr ",
    unread:true,
    isOnline:true,
    userImage: "/Kaylynn Bergson.png",
    name: "Kaylynn Bergson ",
    message:" Hi! Anthony",
},
{
    id: 2,
    type:["group"],
    isGroup:true,
    dateTime:"1hr ",
    unread:true,
    isOnline:true,
    userImage: "/TeamRandom.png",
    name: "Team Random ",
    message:" Hi! Anthony",
},
{
    id: 3,
    type:["friend"],
    isGroup:false,
    dateTime:"1hr ",
    unread:true,
    isOnline:false,
    userImage: "/lisaManoban.png",
    name: "Lalisa Manoban ",
    message:" Hi! Anthony",
},
]);

export const unreadMesageCountAtom = atom ({
    all: 0,
    friends: 0,
    groups: 0,
})

export const messageTabsAtom = atom ((get)=>[
    {
        key: "all",
        title:"All",
        count:get(unreadMesageCountAtom).all,
    },
    {
        key: "friend",
        title: "Friends",
        count:get(unreadMesageCountAtom).friends,
    },
    {
        key: "group",
        title: "Groups",
        count:get(unreadMesageCountAtom).groups,
    },
])