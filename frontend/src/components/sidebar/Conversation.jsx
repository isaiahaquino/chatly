
function Conversation() {
  return (
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full"> 
          <img src="https://avatar.iran.liara.run/username?username=John+Doe" alt="user avatar" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <p className="font-bold">John Doe</p>
      </div>
    </div>
  )
}

export default Conversation