"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function Auth() {
  const [formData, setFormData] = useState({ email: "", username: "", password: "" })
  const [newUser, setNewUser] = useState(true)
  const [emailexists, setEmailExists] = useState(false)
  const [invalidLogin, setInvalidLogin] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.currentTarget.id]:e.currentTarget.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const postData = async () => {
      const resp = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(formData)
      })

      if (resp.ok) {
        signIn("credentials", { email: formData.email, password: formData.password, callbackUrl: 'http://localhost:3000/dashboard' })
      } else if (resp.status === 400) {
        setEmailExists(true)
      } 
    }

    const customSignIn = async () => {
      const resp =  await signIn("credentials", { email: formData.email, password: formData.password, redirect: false })
      if (resp.error) {
        console.log(resp.error)
        setInvalidLogin(true)
      } else {
        router.push("/dashboard")
      }
    }

    if (newUser) {
      postData()
    } else {
      customSignIn()
    }
  }

  const changeMode = () => {
    setNewUser(!newUser)
    setFormData({ email: "", username: "", password: "" })
  }

  

  return (
    <div className="flex h-screen w-screen justify-center bg-gray">
      {newUser ? 
        <div className="flex flex-col items-center mx-auto my-auto px-6 py-8 gap-4 bg-dark-gray text-white rounded-md shadow-md">
          <h1 className="text-xl font-bold">Create an account</h1>
          <form
            className="flex flex-col justify-start gap-2 text-gray"
            onSubmit={handleSubmit}
          >
            <label className="text-xs font-semibold" htmlFor="email">EMAIL</label>
            <input 
              type="text"
              className="bg-black w-[26rem] p-2 rounded-sm text-white mb-4"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />

            <label className="text-xs font-semibold" htmlFor="username">USERNAME</label>
            <input
              type="text"
              className="bg-black w-[26rem] p-2 rounded-sm text-white mb-4"
              id="username"
              onChange={handleChange}
              value={formData.username}
            />

            <label className="text-xs font-semibold" htmlFor="password">PASSWORD</label>
            <input 
              type="text"
              className="bg-black w-[26rem] p-2 rounded-sm text-white mb-4"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />

            <button
              type="submit"
              className="w-full py-2 rounded-sm bg-blue text-white"
            >
              Continue
            </button>
          </form>

          <button
            onClick={changeMode}
            className="text-sm self-start text-teal mt-5"
          >Already have an account?</button>
        </div>
        :
        <div className="flex flex-col items-center mx-auto my-auto px-6 py-8 gap-4 bg-dark-gray text-white rounded-md shadow-md">
          <h1 className="text-xl font-bold">Welcome back!</h1>
          <p className="text-gray">We are so excited to see you again!</p>

          <form
            className="flex flex-col justify-start gap-2 text-gray"
            onSubmit={handleSubmit}
          >
            <label className="text-xs font-semibold" htmlFor="email">EMAIL</label>
            <input 
              type="text"
              className="bg-black w-[26rem] p-2 rounded-sm text-white mb-4"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
            <label className="text-xs font-semibold" htmlFor="password">PASSWORD</label>
            <input 
              type="text"
              className="bg-black w-[26rem] p-2 rounded-sm text-white mb-4"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />

            <button
              type="submit"
              className="w-full py-2 rounded-sm bg-blue text-white"
            >
              Log In
            </button>

          </form>


          <p className="text-sm self-start text-gray">Need an accout? <span onClick={changeMode} className="text-teal mt-5">Register</span></p>
        </div>
      }
    </div>
  )
}
