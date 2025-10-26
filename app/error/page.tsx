import { AlertCircle, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Email Accents */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <AlertCircle
          className="absolute top-20 left-10 h-8 w-8 text-red-200 opacity-30 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Mail
          className="absolute top-40 right-20 h-6 w-6 text-orange-200 opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <AlertCircle
          className="absolute bottom-40 left-20 h-7 w-7 text-red-300 opacity-25 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Mail
          className="absolute bottom-20 right-10 h-9 w-9 text-orange-200 opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <AlertCircle
          className="absolute top-60 left-1/4 h-5 w-5 text-red-400 opacity-30 rotate-12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        />
        <Mail
          className="absolute top-10 right-1/3 h-6 w-6 text-orange-300 opacity-35 animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <AlertCircle
          className="absolute bottom-60 left-1/2 h-8 w-8 text-red-200 opacity-25 animate-bounce"
          style={{ animationDelay: "0.8s" }}
        />
        <Mail
          className="absolute top-80 right-10 h-5 w-5 text-orange-400 opacity-30 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <AlertCircle
          className="absolute bottom-10 left-1/3 h-7 w-7 text-red-300 opacity-20 animate-bounce"
          style={{ animationDelay: "1.2s" }}
        />
        <Mail
          className="absolute top-30 right-1/4 h-6 w-6 text-orange-200 opacity-40 rotate-45 animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
        <AlertCircle
          className="absolute bottom-30 right-1/2 h-9 w-9 text-red-400 opacity-30 animate-bounce"
          style={{ animationDelay: "4s" }}
        />
        <Mail
          className="absolute top-50 left-5 h-7 w-7 text-orange-300 opacity-25 animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
        <AlertCircle
          className="absolute bottom-50 right-5 h-8 w-8 text-red-200 opacity-35 animate-bounce"
          style={{ animationDelay: "2.2s" }}
        />
        <Mail
          className="absolute top-70 right-1/3 h-5 w-5 text-orange-400 opacity-30 animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />
        <AlertCircle
          className="absolute bottom-70 left-1/4 h-6 w-6 text-red-300 opacity-20 rotate-30 animate-bounce"
          style={{ animationDelay: "3.5s" }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6 mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 fugaz-one-regular">
              Goed. waitlist
            </h1>
            {/* Decorative Stamp */}
            <div className="absolute -top-2 -right-15 sm:-right-16 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-lg border-2 border-red-600">
              ERROR
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent flex-1"></div>
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
              <Image
                src="/Logo-text.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent flex-1"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 alan-sans-400 relative">
            Oops! Something went wrong.
            <AlertCircle className="absolute -left-8 top-1 h-4 w-4 text-red-400 opacity-60" />
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl w-full max-w-2xl mx-auto p-4 sm:p-8 relative">
            {/* Paper-like texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent rounded-2xl pointer-events-none"></div>
            {/* Corner fold effect */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-gray-100"></div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <h2 className="text-xl sm:text-2xl font-bold fugaz-one-regular text-gray-800">
                  We encountered an issue
                </h2>
              </div>
              <p className="text-gray-600 alan-sans-400 mb-6">
                There was a problem processing your request. This could be due
                to invalid information, a duplicate entry, or a technical issue.
              </p>
              <p className="text-sm text-gray-500 alan-sans-400 mb-6">
                Please try again or contact us if the problem persists.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                Back to Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
