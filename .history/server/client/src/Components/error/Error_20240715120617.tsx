import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error: React.FC = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <p>{error?.message || 'An unexpected error occurred'}</p>
    </div>
  );
};

export default Error;
