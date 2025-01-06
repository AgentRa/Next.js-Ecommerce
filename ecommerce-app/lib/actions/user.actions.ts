"use server";

import { signInFormSchema, signUpFormSchema } from "@/lib/validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "User signed in successfully" };
  } catch (err) {
    if (isRedirectError(err)) {
      throw err;
    }

    return { success: false, message: "Invalid email or password" };
  }
}
// Sign user out
export async function signOutUser() {
  await signOut();
}

// Sign up user
export async function signUpUser(
  prevState: unknown,
  formData: FormData,
) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: hashSync(formData.get("password") as string, 10),
      confirmPassword: hashSync(formData.get("confirmPassword") as string, 10),
    });

    const plainPassword = formData.get("password");

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: "user",
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "User registered successfully" };
  } catch (err) {
    if (isRedirectError(err)) {
      throw err;
    }

    return { success: false, message: "User registration failed" };
  }
}
