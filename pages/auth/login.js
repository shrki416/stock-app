import { getProviders, signIn } from "next-auth/react";

export default function login({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className={`${
              provider.name === "GitHub" ? `text-blue-500` : `text-red-500`
            } font-semibold rounded border mt-2 bg-gray-200 px-5 py-1.5 transition-all`}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
