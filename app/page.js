"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "jotai";

import Login from '@/app/login/page';


export default function Home() {
  return (
    <NextUIProvider>
      <Provider>
        <main className="w-full h-screen">
          <Login/>
        </main>
      </Provider>
    </NextUIProvider>
  );
}
