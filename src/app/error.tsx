"use client"

import { NextPage, NextPageContext } from 'next';

const ErrorPage: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>Please try again later.</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode || 404 };
};

export default ErrorPage;
