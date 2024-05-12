import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> Chatly</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">First Name</span>
            </label>
            <input type="text" className="w-full input input-border h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Last Name</span>
            </label>
            <input type="text" className="w-full input input-border h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" className="w-full input input-border h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" className="w-full input input-border h-10" />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" className="w-full input input-border h-10" />
          </div>

          <Link className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" to={"/login"}>
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp