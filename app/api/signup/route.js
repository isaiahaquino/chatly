import bcrypt from "bcrypt"
import prisma from "@/prisma/client"

export async function POST(req, res) {
  const { email, username, password } = await req.json()
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    })

    if (existingUser) return new Response("Email already registered.", { status: 400 })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword
      }
    })

    const data = { ...result, id: await prisma.user.findUnique({ where: { email: email }}).id}

    console.log(data)
    return Response.json(data)
  } catch (error) {
    console.log(error)
    return new Response("Something went wrong.", { status: 500 })
  }
  
}
