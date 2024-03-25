"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "jotai";

import NavigationPage from '@/app/frontend/page'
export default function Home() {
  return (
    <NextUIProvider>
      <Provider>
        <main className="w-full h-screen">
          <NavigationPage/>
        </main>
      </Provider>
    </NextUIProvider>
  );
}
