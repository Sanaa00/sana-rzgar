import React from 'react';

interface ErrorProps {
  error: unknown;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  let errorMessage: string;
  if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'An unknown error occurred';
  }

  return (
    <div className="error">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
