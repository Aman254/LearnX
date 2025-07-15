import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import { SocialAuthForm } from "@/components/Forms/SocialAuthForm";
import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/icons/learnX-logo.png"
            alt="Logo"
            width={120}
            height={20}
            className="hidden md:block"
          />
        </Link>

        <div className="flex-1 flex justify-center">
          <p className="text-gray-600">Global Search</p>
        </div>

        <div className="flex items-center space-x-4">
          {session?.user ? (
            <LogoutButton
              name={session.user.name}
              email={session.user.email}
              image={session.user.image}
            />
          ) : (
            <SocialAuthForm />
          )}
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
