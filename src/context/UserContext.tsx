"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

type UserContextType = {
  user: { id: number; name: string; email: string } | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<UserContextType["user"]>(null);

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: Number(session.user.id),
        name: session.user.name!,
        email: session.user.email!,
      });
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};