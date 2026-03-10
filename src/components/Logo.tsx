import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-indigo-400/20 blur-lg rounded-full group-hover:bg-emerald-400/40 transition-all duration-500" />
      
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-2xl"
      >
        {/* Outer Ring - Fragmented */}
        <path
          d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90"
          stroke="url(#logo-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          className="opacity-40"
        />
        
        {/* Inner Nexus Shape - Interlocking Diamonds */}
        <path
          d="M50 25L75 50L50 75L25 50L50 25Z"
          fill="url(#logo-gradient)"
          className="group-hover:scale-110 transition-transform duration-500 origin-center"
        />
        
        {/* Central Core */}
        <circle
          cx="50"
          cy="50"
          r="8"
          fill="currentColor"
          className="animate-pulse text-indigo-600"
        />
        
        {/* Connecting Lines */}
        <path
          d="M50 10V25M50 75V90M90 50H75M25 50H10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-40 text-zinc-400"
        />

        <defs>
          <linearGradient id="logo-gradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f46e5" /> {/* Indigo 600 */}
            <stop offset="1" stopColor="#10b981" /> {/* Emerald 500 */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
