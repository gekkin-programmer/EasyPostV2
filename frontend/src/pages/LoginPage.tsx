import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa6';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 lg:grid lg:grid-cols-2">
      
      {/* --- Left Side: The Form (Unchanged) --- */}
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {/* The form JSX remains the same as our previous version */}
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <a href="/"><img className="h-10 w-auto" src="/Wiggle Logo.png" alt="EAsyPost Logo" /></a>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome back</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to continue to EAsyPost.</p>
          </div>
          <div className="mt-10">
            <div>
              <button type="button" className="w-full flex items-center justify-center gap-3 rounded-md bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <FaGoogle className="w-5 h-5" /> Continue with Google
              </button>
            </div>
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-gray-200 dark:border-gray-700" /></div>
              <div className="relative flex justify-center text-sm"><span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">OR</span></div>
            </div>
            <form action="#" method="POST" className="mt-6 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Email Address</label>
                <div className="mt-2"><input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-2.5 text-gray-900 dark:bg-gray-800 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3C48F6] sm:text-sm sm:leading-6 transition-all" /></div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Password</label>
                <div className="relative mt-2">
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required className="block w-full rounded-md border-0 py-2.5 text-gray-900 dark:bg-gray-800 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3C48F6] sm:text-sm sm:leading-6 transition-all pr-10" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className="text-sm text-right"><a href="#" className="font-semibold text-[#3C48F6] hover:text-blue-500">Forgot password?</a></div>
              <div><button type="submit" className="flex w-full justify-center rounded-md bg-[#3C48F6] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 transition-colors">Sign in</button></div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">Don't have an account?{' '}<a href="/signup" className="font-semibold leading-6 text-[#3C48F6] hover:text-blue-500">Sign up for free</a></p>
          </div>
        </div>
      </div>

      {/* --- Right Side: THE NEW "CONTENT CASCADE" --- */}
      <div className="relative hidden lg:flex items-center justify-center p-12 bg-blue-50 dark:bg-gray-900 overflow-hidden">
        {/* Branded background glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 70%, #3c48f61a, transparent 60%)'
          }}
        />

        <div className="relative w-full max-w-lg">

          
          {/* Background Card 1 (Left) */}
          <motion.div
            className="absolute top-0 left-0 w-[85%] origin-bottom-left z-0"
            animate={{ y: [0, -15, 0], rotate: -6 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-2">
              <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop" className="rounded-xl object-cover" />
            </div>
          </motion.div>

          {/* Background Card 2 (Right) */}
           <motion.div
            className="absolute -top-8 right-0 w-[80%] origin-bottom-right z-0"
            animate={{ y: [0, 10, 0], rotate: 4 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-2">
              <img src="https://images.unsplash.com/photo-1554177255-61502b352de3?w=800&auto=format&fit=crop" className="rounded-xl object-cover" />
            </div>
          </motion.div>

          {/* Foreground Card (The Main One) */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-2">
            <img 
              src="/Login.jpg" 
              alt="Social media post preview" 
              className="w-full h-56 object-cover"
            />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;