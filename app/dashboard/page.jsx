"use client"

import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function Dashboard() {
  const { data, isLoading } = useSession()

  if (isLoading) return null

  console.log(data.user)

  return (
    <div>
     
    </div>
  )
}