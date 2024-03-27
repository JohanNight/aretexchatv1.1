import NextAuth from "next-auth"
import Providers from "next-auth/providers/google"

const handler= NextAuth({
    providers:[
        Providers({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorization:{
                params:{
                    prompt: "consent",
                    access_type: "offline",
                    scope:
                    "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.spaces.create https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.create https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.messages.reactions.create https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.delete https://www.googleapis.com/auth/chat.users.readstate https://www.googleapis.com/auth/chat.users.readstate.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.app https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships  https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.spaces https://www.googleapis.com/auth/chat.admin.spaces.readonly",
                },
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token, user, account, profile}){
            if (user) {
                token = { ...user, ...account, ...profile};
            }
            return token;
        },
        async session(session, token){
            if(token){
                session.user = token;
            }
            return session;
        },
    },
});

export {handler as GET, handler as POST};