'use client'

import { useState } from 'react'
import { QuestionMarkCircleIcon, BellIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import UserProfile from "./UserProfile"

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo or Left section */}
        <div className="w-48 flex-shrink-0" />

        {/* Right section with animated search */}
        <div className="flex items-center justify-end space-x-4">
          <div className="relative flex items-center">
            {/* Animated search container */}
            <div
              className={`
                absolute right-0 
                overflow-hidden 
                transition-all duration-300 ease-in-out
                flex items-center
                ${isSearchExpanded ? 'w-[400px] z-20' : 'w-10 pointer-events-none'}
              `}
            >
              {/* Search input wrapper */}
              <div className={`
                w-full bg-gray-100 rounded-lg flex items-center
                transition-opacity duration-300
                ${isSearchExpanded ? 'opacity-100' : 'opacity-0'}
              `}>
                <div className="absolute left-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search anything or Ask NeuroVibes AI"
                  className={`
                    w-full pl-10 pr-10 py-2 
                    bg-transparent
                    text-sm text-gray-900 
                    placeholder-gray-500 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-500 
                    transition-colors duration-200
                  `}
                  autoFocus={isSearchExpanded}
                />
                {isSearchExpanded && (
                  <button 
                    onClick={() => setIsSearchExpanded(false)}
                    className="absolute right-3 flex items-center"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Search trigger button */}
            <button 
              className={`
                text-gray-400 hover:text-gray-500 
                focus:outline-none focus:text-gray-500
                transition-opacity duration-300
                z-10
                ${isSearchExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
              `}
              onClick={() => setIsSearchExpanded(true)}
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Other header icons */}
          <div className="min-w-[300px] flex justify-end">
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  )
} 