import React from 'react'

export default function SignIn({ signIn }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-mono text-xl">Not signed in</p>
      <button
        className="px-3 py-2 bg-red-500 text-gray-700 rounded mt-4"
        onClick={signIn}
      >
        Sign in
      </button>
    </div>
  );
}
