import {
  UserCircleIcon,
  KeyIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  CommandLineIcon,
  UserIcon,
  BriefcaseIcon,
  HeartIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import { MenuSection } from './types'

export const menuStructure: MenuSection[] = [
  {
    title: 'My Profile',
    icon: UserCircleIcon,
    items: [
      { title: 'Personal Profile', path: '/dashboard/profile', icon: UserCircleIcon },
      { title: 'Change Password', path: '/dashboard/password', icon: KeyIcon },
    ]
  },
  {
    title: 'Course',
    icon: AcademicCapIcon,
    items: [
      { title: 'Course', path: '/dashboard/course', icon: AcademicCapIcon },
      { title: 'Assessment Run', path: '/dashboard/assessment-run', icon: ClipboardDocumentCheckIcon },
    ]
  },
  {
    title: 'Users',
    icon: UsersIcon,
    items: [
      { title: 'Cohort', path: '/dashboard/cohort', icon: UserGroupIcon },
      { title: 'Subcohort', path: '/dashboard/subcohort', icon: UsersIcon },
      { title: 'Super Admin', path: '/dashboard/super-admin', icon: ShieldCheckIcon },
      { title: 'Company Admin', path: '/dashboard/company-admin', icon: BuildingOfficeIcon },
      { title: 'Course Commander', path: '/dashboard/course-commander', icon: CommandLineIcon },
      { title: 'Trainer', path: '/dashboard/trainer', icon: UserIcon },
      { title: 'Trainee', path: '/dashboard/trainee', icon: BriefcaseIcon },
    ]
  },
  {
    title: 'Assessments',
    icon: ClipboardDocumentCheckIcon,
    items: [
      { title: 'Cognitive', path: '/dashboard/cognitive', icon: ClipboardDocumentCheckIcon },
      { title: 'Psychological', path: '/dashboard/psychological', icon: HeartIcon },
      { title: 'Physiological', path: '/dashboard/physiological', icon: ChartBarIcon },
    ]
  },
  {
    title: 'Reports',
    icon: DocumentTextIcon,
    items: [
      { title: 'Trainer Notes', path: '/dashboard/trainer-notes', icon: ClipboardDocumentListIcon },
      { title: 'Team Resilience Report', path: '/dashboard/team-resilience', icon: UsersIcon },
      { title: 'Trainee Report', path: '/dashboard/trainee-report', icon: DocumentTextIcon },
    ]
  },
  {
    title: 'Setup',
    icon: Cog6ToothIcon,
    items: [
      { title: 'Survey Configuration', path: '/dashboard/survey-config', icon: ClipboardDocumentCheckIcon },
    ]
  }
] 