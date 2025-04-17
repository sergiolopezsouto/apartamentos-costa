"use client";

import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';

const ErrorPage: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">{statusCode ? `Error ${statusCode}` : 'An Error Occurred'}</h1>
      <p className="text-lg text-gray-600">We are sorry, but something went wrong. Please try again later.</p>
      <Link href="/" className="mt-4 text-blue-600 underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode || 404 };
};

export default ErrorPage;