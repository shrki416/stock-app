import { signIn, signOut, useSession } from "next-auth/react";

import Head from "next/head";
import Link from "next/link";
import SignIn from "../components/SignIn";

export default function Home() {
  const { data: session } = useSession();

  return <SignIn signIn={signIn} session={session} signOut={signOut} />;
}
