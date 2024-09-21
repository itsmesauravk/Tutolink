import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryLight">
      {/* Login Card */}
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-primaryDark mb-6">
          Welcome Back!
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-primary transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-primary transition"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-primaryDark hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg py-2 hover:bg-primaryDark transition"
          >
            Login
          </button>

          <div className="flex items-center justify-between mt-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition">
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?
            <Link to={"/register"} className="text-primary hover:underline">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
