import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>

        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          It looks like the page you’re looking for doesn’t exist.
          It might have been moved or removed.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/Products"
            className="px-6 py-3 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
