"use client"

import { signIn } from "next-auth/react";


export default function Home() {
  return (
    <main>
      <button onClick={() => signIn()}>sign in</button>
    </main>
  );
}
