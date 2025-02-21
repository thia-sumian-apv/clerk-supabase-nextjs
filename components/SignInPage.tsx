import { SignIn, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/nv-logo.png"
              alt="NeuroVibes Logo"
              width={300}
              height={100}
              className="h-auto w-auto object-contain"
              priority
              unoptimized
            />
          </div>

          {/* Welcome text */}
          <div className="text-center">
            <p className="mt-2 text-gray-600">
              Contact management designed for teams and individuals
            </p>
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
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "border rounded-lg shadow-sm",
                formButtonPrimary: "bg-black hover:bg-gray-900",
              },
            }}
          />

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

      {/* Footer */}
      <footer className="bg-gray-900 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/nv-logo.png"
              alt="NeuroVibes Logo"
              width={100}
              height={30}
              className="h-8 w-auto"
            />
          </div>
          <div className="text-white text-sm">
            curated by <span className="font-medium">Your Company</span>
          </div>
        </div>
      </footer>
    </div>
  );
}