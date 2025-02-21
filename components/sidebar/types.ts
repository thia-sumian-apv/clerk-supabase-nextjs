import { ComponentType } from 'react'
import { SVGProps } from 'react'

export interface MenuItem {
  title: string
  path: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export interface MenuSection {
  title: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  items: MenuItem[]
} 