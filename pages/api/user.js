import { getSession } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req });

  console.log(`🍎`, session);

  if (session) {
    res.send(session.user);
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};
