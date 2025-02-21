'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HomeIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { menuStructure } from './menuStructure'
import { MenuSection } from './types'

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>(['My Profile'])

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 overflow-y-auto">
      {/* Logo */}
      <div className="flex justify-center p-6">
        <Image
          src="/nv-logo.png"
          alt="NeuroVibes Logo"
          width={200}
          height={60}
          className="h-auto w-auto object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        {/* Dashboard - Standalone Item */}
        <Link
          href="/dashboard"
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg mb-4 ${
            pathname === '/dashboard'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <HomeIcon className="h-5 w-5 mr-3" />
          <span>Dashboard</span>
        </Link>

        {/* Collapsible Sections */}
        {menuStructure.map((section) => {
          const SectionIcon = section.icon
          const isExpanded = expandedSections.includes(section.title)
          const isActive = section.items.some(item => pathname === item.path)
          
          return (
            <div key={section.title} className="mb-4">
              <button
                onClick={() => toggleSection(section.title)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <SectionIcon className="h-5 w-5 mr-3" />
                  <span>{section.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDownIcon className="h-4 w-4" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-2 space-y-1">
                  {section.items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center px-3 py-2 text-sm rounded-lg ml-6 ${
                          pathname === item.path
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <ItemIcon className="h-4 w-4 mr-3" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}