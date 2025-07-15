"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";

export function SocialAuthForm() {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login To your Account</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-12 bg-transparent cursor-pointer"
              onClick={() => handleSignIn("google")}
            >
              <Image
                src="/icons/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-12 bg-transparent cursor-pointer"
              onClick={() => handleSignIn("github")}
            >
              <Image
                src="/icons/github.svg"
                alt="Github"
                width={20}
                height={20}
              />
              Continue with Github
            </Button>
            <p className="text-xs text-gray-500 text-center pt-4">
              By creating an account, you agree to our{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
