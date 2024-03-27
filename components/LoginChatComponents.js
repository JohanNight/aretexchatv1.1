"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";

const LoginChatComponents = () => {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/app/frontend" });
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl font-medium">Google Chat API Integration</h1>
          <button onClick={handleSignIn} className="btn  btn-primary text-xl text-white">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginChatComponents;
