import { useState, useEffect } from "react";
import { supabase } from "../louvebrasilia/app/lib/supabase";
import Auth from "../louvebrasilia/app/components/Auth/Auth";
import { Session } from "@supabase/supabase-js";
import { Routes } from "./app/routes";
import { checkIfUserHasProfile } from "./app/components/Auth/CheckUserHasProfile";
import Account from "./app/components/Auth/Account";
import { StatusBar } from "react-native";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if(session && session.user) {
      const userId = session.user.id;
      checkIfUserHasProfile(userId).then((result) => {
        setHasProfile(result)
      })
    }
  }, [session]);

  return (
    <>
      <StatusBar
        barStyle="light-content" // Use 'dark-content' for light battery/clock
        backgroundColor="#121212" // Change the background color of the status bar
      />
      {session && session.user ? (
        hasProfile ? (
          <Routes />
        ) : (
          <Account key={session.user.id} session={session} />
        )
      ) : (
        <Auth />
      )}
    </>
  );
}
