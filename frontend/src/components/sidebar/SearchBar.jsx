
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className="flex gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 ourline-none" />
      </button>
    </form>
  )
}

export default SearchBar

