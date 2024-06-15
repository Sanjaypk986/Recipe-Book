import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center grid sm:grid-cols-2">
        <p className="mb-4">&copy; 2024 Delicious Diaries. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.87 8.15 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.36-1.34-3.36-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.9 1.52 2.36 1.08 2.93.83.09-.65.35-1.08.63-1.33-2.22-.26-4.55-1.12-4.55-5 0-1.1.39-2 1.02-2.71-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.03a9.45 9.45 0 012.48-.33 9.45 9.45 0 012.48.33c1.9-1.3 2.73-1.03 2.73-1.03.54 1.4.2 2.44.1 2.7.63.71 1.02 1.61 1.02 2.71 0 3.88-2.34 4.74-4.57 5 .36.31.68.91.68 1.83v2.71c0 .27.18.58.69.48A10.01 10.01 0 0022 12.04c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.86-2.34 8.48 8.48 0 01-2.7 1.03A4.23 4.23 0 0016.3 4c-2.34 0-4.25 1.92-4.25 4.29 0 .34.03.67.1.99a12.04 12.04 0 01-8.78-4.47 4.31 4.31 0 00-.58 2.16c0 1.48.74 2.78 1.87 3.55a4.23 4.23 0 01-1.93-.54v.05c0 2.07 1.47 3.79 3.42 4.18-.35.1-.73.15-1.11.15-.27 0-.54-.03-.8-.08.55 1.73 2.14 2.99 4.02 3.02a8.54 8.54 0 01-5.3 1.83c-.34 0-.67-.02-1-.06a12.08 12.08 0 006.54 1.93c7.86 0 12.17-6.55 12.17-12.24 0-.19-.01-.39-.02-.58a8.78 8.78 0 002.15-2.26z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.61 3.42 8.43 7.87 9.23v-6.5h-2.36V12H9.9V9.75c0-2.34 1.42-3.62 3.5-3.62.99 0 1.84.07 2.09.1v2.42H14.4c-1.1 0-1.32.52-1.32 1.29V12h2.68l-.35 2.72h-2.33v6.5C18.58 20.43 22 16.61 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
