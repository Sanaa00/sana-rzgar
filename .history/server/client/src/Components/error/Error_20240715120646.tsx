import React from 'react';
import { useRouteError } from 'react-router-dom';

// Define a type for the error object
interface RouteError {
  message: string;
}

const Error: React.FC = () => {
  const error = useRouteError() as RouteError; // Type the error object

  return (
    <div>
      <h1>Error</h1>
      <p>{error?.message || 'An unexpected error occurred'}</p>
    </div>
  );
};

export default Error;
