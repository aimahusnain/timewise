import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import * as React from "react";
import { FC } from "react";
import { Button, buttonVariants } from "../ui/button";
import UserAccountNav from "./UserAccountNav";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      console.log("There was an error logging in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  const { data: session } = useSession();

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      {!session?.user?.email ? (
        <Button
          className="flex items-center gap-2 bg-blue-500 text-white"
          size="sm"
          onClick={loginWithGoogle}
          disabled={isLoading}
        >
          <LogIn className="w-4 h-4" />
          <span>Sign in</span>
        </Button>
      ) : (
        <>
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            Dashboard
          </Link>

          <UserAccountNav
            name={
              !session.user.given_name || !session.user.family_name
                ? "Your Account"
                : `${session.user.given_name} ${session.user.family_name}`
            }
            email={session.user.email ?? ""}
            imageUrl={session.user.picture ?? ""}
          />
        </>
      )}
    </div>
  );
};

export default UserAuthForm;
