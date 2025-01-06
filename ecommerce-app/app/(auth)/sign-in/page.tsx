import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import CredentialsSigningForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

type Props = { searchParams: Promise<{ callbackUrl: string }> };
export default async function SignInPage({ searchParams }: Props) {
  const { callbackUrl } = await searchParams;

  const session = await auth();

  if (session) redirect(callbackUrl || "/");

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME}`}
              height={100}
              width={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
          <CardContent className="space-y-4">
            <CredentialsSigningForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
