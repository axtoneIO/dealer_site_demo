import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

function Login() {
  const [count, setCount] = useState(0);
  const { register } = useForm();
  const node = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="mb-4 flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/1200px-Circle-icons-car.svg.png" className="max-w-[20%] h-auto rounded-full" alt=""></img>
        </div>
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Dealer site</div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900">Sign in to our platform</h5>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400" placeholder="name@company.com" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 " required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 ">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
      </div>
      <p className="text-center text-gray-500 text-xs mt-5">
        &copy;2020 Ikon Technologies. All rights reserved.
      </p>
    </div>
  );
}

export default Login
