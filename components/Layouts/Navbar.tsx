'use client'
import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'
import Image from 'next/image'
import Links from 'next/link'

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      lable: 'Home',
      url: '/'
    },
    {
      lable: 'Dashboard',
      url: '/dashboard'
    },
    {
      lable: 'Profile',
      url: '/profile'
    },
    {
      lable: 'Project',
      url: '/project'
    },
    {
      lable: 'Contact',
      url: '/contact'
    }
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className='bg-black'>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
        <NavbarBrand>
          <Image src='/logo.png' alt='imagess' width={40} height={40} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-14 text-white font-medium ' justify='center'>
        <NavbarItem>
          <Links href='/'>Home</Links>
        </NavbarItem>
        <NavbarItem isActive>
          <Links href='/profile'>Profile</Links>
        </NavbarItem>
        <NavbarItem>
          <Links href='/project'>Project</Links>
        </NavbarItem>
        <NavbarItem>
          <Links href='/contact'>Contact</Links>
        </NavbarItem>
        <NavbarItem>
          <Links href='/dashboard'>Dashboard</Links>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className='w-full'
              href={item.url}
              size='lg'
            >
              {item.lable}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
