'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { title: 'My Profile', path: '/dashboard/profile', icon: 'user' },
  { title: 'Course', path: '/dashboard/course', icon: 'book' },
  { title: 'Assessment Run', path: '/dashboard/assessment', icon: 'clipboard' },
  { title: 'Cohort', path: '/dashboard/cohort', icon: 'users' },
  { title: 'Sub-cohort', path: '/dashboard/sub-cohort', icon: 'users-group' },
  { title: 'Super Admin', path: '/dashboard/super-admin', icon: 'shield' },
  { title: 'Company Admin', path: '/dashboard/company-admin', icon: 'building' },
  { title: 'Course Commander', path: '/dashboard/course-commander', icon: 'command' },
  { title: 'Trainer', path: '/dashboard/trainer', icon: 'academic-cap' },
  { title: 'Trainee', path: '/dashboard/trainee', icon: 'user-group' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold">NeuroVibes</h2>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center p-3 rounded-lg mb-1 ${
              pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
} 