import { getSession, signOut } from "next-auth/react";

import Head from "next/head";
import Link from "next/link";
import SignIn from "../components/SignIn";

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <nav className='flex justify-between items-center'>
        <h1 className="text-2xl font-mono font-bold">Home Page</h1>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-500 hover:text-white"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </nav>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
