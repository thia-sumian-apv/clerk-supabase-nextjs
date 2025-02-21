'use client'

import { UserButton, useUser } from "@clerk/nextjs"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function UserProfile() {
  const { user } = useUser()
  
  return (
    <div className="flex items-center gap-4">
      {/* User Info */}
      <div className="text-right mr-2">
        <div className="text-sm font-medium text-gray-900">
          {user?.emailAddresses[0]?.emailAddress}
        </div>
        <div className="text-xs text-gray-500">
          Super Admin
        </div>
      </div>

      {/* Divider */}
      <div className="h-8 w-px bg-gray-200"></div>

      {/* User Button */}
      <div className="flex items-center">
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-8 w-8 rounded-full ring-2 ring-white",
              userButtonTrigger: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            }
          }}
        />
      </div>
    </div>
  )
} 