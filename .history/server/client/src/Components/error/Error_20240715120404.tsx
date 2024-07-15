import React from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorProps {
  error: any;
}

const Error: React.FC = () => {
  const error = useRouteError() as ErrorProps;
  return (
    <div>
      <h1>Error</h1>
      <p>{error.error?.message || 'An unexpected error occurred'}</p>
    </div>
  );
};

export default Error;
