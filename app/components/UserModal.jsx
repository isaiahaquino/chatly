
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function UserModal() {
  const session = useSession()

  if (session.status === "loading") return null


  return (
    <div className="flex flex-col items-center py-4 px-2 gap-4">
      <div className="w-24 h-24 rounded-full bg-blue z-10">
        {/* user image will be here */}
      </div>
      <div className="bg-dark-gray p-4 pt-8 -mt-8 rounded-md flex flex-col items-center w-[16rem] text-white">
        <h1>{session.data.user.email}</h1>
      </div>
      <button
        className="rounded-sm bg-blue text-white py-1 px-10"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </div>
  )
}