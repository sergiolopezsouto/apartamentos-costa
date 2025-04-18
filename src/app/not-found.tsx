"use client"

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 text-blue-600 underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
