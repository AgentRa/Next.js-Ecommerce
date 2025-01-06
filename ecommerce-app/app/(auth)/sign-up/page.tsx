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
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUpForm from "@/app/(auth)/sign-up/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

type Props = { searchParams: Promise<{ callbackUrl: string }> };
export default async function SignUpPage({ searchParams }: Props) {
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
          <CardTitle className="text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Enter your information below to sign up
          </CardDescription>
          <CardContent className="space-y-4">
            <SignUpForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
