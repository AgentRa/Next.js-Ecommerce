"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};
export default function NotFoundPage({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow md text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <h2 className="mt-2 text-lg text-red-600">Could not find requested page</h2>
        <Button className="mt-4" variant="outline" onClick={() => (window.location.href = "/")}>
          Go back to home
        </Button>
      </div>
    </div>
  );
}
