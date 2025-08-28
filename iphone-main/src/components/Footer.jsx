import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span>
            
          </p>
          <p className="text-xs font-semibold text-gray">
            Or call 01008872621
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">Copright @ 2025 Abdelrahman shaban. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-xs font-semibold text-gray">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer