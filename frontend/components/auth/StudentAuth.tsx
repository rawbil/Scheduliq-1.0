"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function StudentAuth() {
  const [passwordOn, setPasswordOn] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/students");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black max-w-lg mx-auto mt-[20vh] p-2 rounded-md shadow-sm shadow-purple"
    >
      <h2 className="text-center text-xl font-medium">{isSignIn ? "Student Sign In" : "Student Register"}</h2>
      <div>
        <input
          className="border-b-[1.5px] border-slate-600 mb-5 p-2 outline-0 focus:border-black w-full"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          value={data.email}
          required
        />
      </div>
      <div className="relative">
        <input
          className="border-b-[1.5px] border-slate-600 mb-5 p-2 outline-0 focus:border-black w-full"
          type={`${passwordOn ? "password" : "text"}`}
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleOnChange}
          value={data.password}
          required
        />
        {!passwordOn ? (
          <FaEyeSlash
            className="absolute top-1/4 right-4 cursor-pointer text-slate-600"
            onClick={() => setPasswordOn((prev) => !prev)}
          />
        ) : (
          <FaEye
            className="absolute top-1/4 right-4 cursor-pointer text-slate-600"
            onClick={() => setPasswordOn((prev) => !prev)}
          />
        )}
      </div>

      <button type="submit" className="bg-purple p-2 rounded-md text-white grid mx-auto my-5 hover:bg-purple/90 ">
        {isSignIn ? "Sign In" : "Register"}
      </button>
      {isSignIn ? (
        <p className="text-center text-slate-700">
          don't have an account?{" "}
          <span
            className="text-purple underline hover:no-underline cursor-pointer"
            onClick={() => setIsSignIn((prev) => !prev)}
          >
            Sign In
          </span>
        </p>
      ) : (
        <p className="text-center text-slate-700">
          already have an account?{" "}
          <span
            className="text-purple underline hover:no-underline cursor-pointer"
            onClick={() => setIsSignIn((prev) => !prev)}
          >
            Register
          </span>
        </p>
      )}
    </form>
  );
}
