import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";


export default function SignIn() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 lg:h-full h-40 md:hidden lg:block">
          <Image src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center text-green-950 md:text-white text-center p-2 md:p-8 md:bg-green-950 w-full  lg:w-1/2">
          <h2 className=" font-bold text-3xl md:text-6xl mb-2 md:mb-8">Sign In</h2>
          <p className="text-lg md:text-2xl">Sign In For Your Optimal Irrigation Scheduling</p>

          <form className="md:px-8 px-2 md:my-8 my-2">
           
            <div>
              <label className="block text-left">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 my-2 rounded bg-gray-200"
              />
            </div>
            <div>
              <label className="block text-left">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 rounded bg-gray-200"
              />
            </div>
            
            <button className=" md:py-4 px-3 py-2 md:px-8 w-full md:w-2/3 my-2 rounded bg-green-900 md:bg-green-500 hover:bg-green-700 font-bold text-lg text-white">
              Sign In
            </button>
          </form>
          <Link href='/' className="md:text-xl">Don't Have An Account? Sign In!</Link>
        </div>
      </div>
    </div>
  );
}
