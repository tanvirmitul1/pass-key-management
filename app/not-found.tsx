import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
          404
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
      <div className="mt-8">
        <svg
          className="w-32 h-32 sm:w-40 sm:h-40 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M12 12v.01M12 8v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
