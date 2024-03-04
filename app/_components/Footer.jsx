import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-primary sm:justify-start">
                <img src="/Logo.png" alt="Logo"  width={180} height={80}/>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2024. All rights reserved.
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer