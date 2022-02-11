import { useEffect, useState } from "react";

import { getSession } from "next-auth/react";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      const session = await getSession();

      console.log(session);

      if (session) {
        setUser(session.user);
      }
    }

    getUser();
  }, []);

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}
