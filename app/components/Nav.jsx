"use client"

import { useState } from "react"

import { UserIcon } from "@heroicons/react/24/outline"
import Modal from "./Modal"
import UserModal from "./UserModal"

export default function Nav() {
  const [userModal, setUserModal] = useState(false)



  return (
    <div className="h-screen bg-black p-3 flex flex-col justify-between">
      <Modal 
        show={userModal}
        close={(e) => setUserModal(false)}
      >
        <UserModal />
      </Modal>

      <div>

      </div>

      <div>
        <button 
          className="p-3 rounded-full bg-dark-gray"
          onClick={(e) => setUserModal(true)}
        >
          <UserIcon className="h-6 text-blue"/>
        </button>
      </div>
      
    </div>
  )
}