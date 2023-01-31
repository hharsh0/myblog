import React from 'react'
import headerNavLinks from '@/data/headerNavLinks';
import Link from 'next/link';
import { navigation } from '@/data/nav'
import CommandPalette from './CommandPalette';
import ThemeSwitch from './ThemeSwitch';

function Nav() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex w-3/4 justify-between text-base">
        <div className="p-4">
          ~/ <span className="blinking-cursor">|</span>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <CommandPalette navigation={navigation} />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

export default Nav