"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use client-side navigation
import { signup } from "@/actions/auth/actions"; // Import your signup logic

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
export default function SignUpPage() {
  const router = useRouter();

  // Handle form submission
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const result = await signup(formData); // Call your signup function
      console.log("Signup successful:", result); // Log success or handle response
      router.push("/"); // Navigate to home page after successful signup
    } catch (error) {
      console.error("Signup failed:", error); // Handle signup errors
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md" customProp="custom prop">
        <CardHeader>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to create a new account.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <Button formAction={signup} className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link className="text-sm underline" href="/signin">
            Already have an account? Sign In
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
