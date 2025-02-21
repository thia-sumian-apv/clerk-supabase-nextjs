import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from 'next/image'

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
          <Image
            src="/NV-logo.png"
            alt="NeuroVibes Logo"
            width={300}
            height={100}
            className="h-auto w-auto object-contain"
            priority
            unoptimized
          />
          </div>

          {/* Sign Up Button */}
          <div className="text-center">
            <SignUpButton mode="modal">
              <button className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                New user? Create an account
              </button>
            </SignUpButton>
          </div>

          {/* Clerk Sign In Component */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Sign in buttons */}
          <div className="space-y-4">
            {/* Email input - Note: This will open Clerk's modal */}
            <SignInButton mode="modal">
              <button className="w-full px-4 py-2.5 border border-transparent rounded-lg text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Continue with email
              </button>
            </SignInButton>
          </div>
          
          {/* Terms */}
          <p className="text-center text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
