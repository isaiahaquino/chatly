"use client"

import { useSession } from "next-auth/react"

export default function Dashboard() {
  const { data, isLoading } = useSession()

  if (isLoading) return null

  return (
    <div>
     
    </div>
  )
}