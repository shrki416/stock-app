import Link from "next/link";
import useSWR from "swr";

export default function Dashboard() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/dashboard", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;


  return (
    <div className="m-8">
      <h1 className="pb-4">Dashboard Page</h1>
      <ul className="pb-4">
        {data.users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <Link href="/">
        <a className="p-2 bg-orange-500 rounded">&larr; Home</a>
      </Link>
    </div>
  );
}
