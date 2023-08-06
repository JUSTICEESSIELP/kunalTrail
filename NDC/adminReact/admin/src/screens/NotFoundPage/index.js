import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage () {
  return (
    <div class="flex items-center justify-center h-screen">
        <div class="max-w-sm bg-white p-8 rounded-lg shadow-lg">
            <h1 class="text-5xl font-bold mb-6 text-center text-red-500">404</h1>
            <p class="text-xl text-gray-600 mb-6 text-center">Oops! Page not found.</p>
            <p class="text-gray-500 text-center mb-6">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <div class="flex justify-center">
                <Link to='/' class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">Go Back</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage
