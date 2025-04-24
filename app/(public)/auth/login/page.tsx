/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add authentication logic here
      router.push("/dashboard");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[--color-primary] to-[--color-accent] p-4">
      <Card className="w-full max-w-md bg-[--color-card] shadow-lg rounded-2xl p-6 animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[--color-primary-foreground]">
            Sign In
          </CardTitle>
          <CardDescription className="text-[--color-muted-foreground]">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg border-[--color-border] focus:border-[--color-ring] focus:ring focus:ring-[--color-ring]/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-lg border-[--color-border] focus:border-[--color-ring] focus:ring focus:ring-[--color-ring]/50"
              />
            </div>
            {error && (
              <p className="text-[--color-destructive] text-sm text-center">
                {error}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-[--color-primary] hover:bg-[--color-primary-foreground] text-[--color-card] py-2 rounded-lg transition"
            >
              Sign In
            </Button>
            <div className="text-sm text-center text-[--color-muted-foreground]">
              Don&apos;t have an account?
              <Link
                href="/auth/register"
                className="text-[--color-accent] hover:underline font-medium ml-1"
              >
                Register
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
