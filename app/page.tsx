"use client";

import { Button } from "@/components/ui/button";
import { useAuth, firebaseSignIn, firebaseSignInGuest } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  if (user) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative bottom-14 z-50 flex min-h-screen flex-col items-center justify-center p-5">
      <div className="mb-10 flex flex-col gap-y-2">
        <h1 className="retro-text text-center text-4xl text-[#85B6F2]">
          Adventurely
        </h1>
        <p className="retro-text text-center text-sm">
          Get Your Work <span className="underline decoration-[3px]">Done</span>
          .
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button onClick={firebaseSignIn}>
          <div className="relative h-5 w-2.5">
            <i className="nes-icon google"></i>
          </div>
          <div className="ml-5">Sign In with Google</div>
        </Button>
        <Button
          onClick={firebaseSignInGuest}
          className="text-sm"
          variant={"ghost"}
        >
          Play as Guest
        </Button>
      </div>
    </div>
  );
}
