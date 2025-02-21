'use client'

import { QuestionMarkCircleIcon, BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import UserProfile from "./UserProfile"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left section - empty for balance */}
        <div className="w-48 flex-shrink-0" /> {/* Reduced width to allow more space for search */}

        {/* Centered Search */}
        <div className="flex-1 flex justify-center max-w-4xl mx-auto"> {/* Increased max-width */}
          <div className="w-full max-w-3xl relative"> {/* Increased max-width */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search anything or Ask NeuroVibes AI"
              className="block w-full pl-10 pr-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-200 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="w-48 flex items-center justify-end space-x-4"> {/* Reduced width to match left section */}
          <UserProfile />
        </div>
      </div>
    </header>
  )
} 