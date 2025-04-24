// app/page.tsx (or wherever Home is defined)
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ColorMode from "@/components/theme/ColorMode";
import prisma from "@/lib/prisma";
import AllUsers from "@/components/users/AllUsers";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-primary">Enterprise App</span>
        </h1>
        <ColorMode />
        <AllUsers users={users} /> {/* ✅ passed here */}
        <p className="text-lg md:text-xl color-secondary max-w-2xl mx-auto mb-8">
          A scalable, modern solution built with Next.js for enterprise needs.
          Get started today and streamline your workflow.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/login">
            <Button className="px-6 py-3 text-lg">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline" className="px-6 py-3 text-lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section (Optional) */}
      <section className=" px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-background border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-2">Scalable</h2>
          <p className="color-secondary">
            Designed to grow with your business, handling complex requirements
            with ease.
          </p>
        </div>
        <div className="p-6 bg-background border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-2">Secure</h2>
          <p className="color-secondary">
            Built-in authentication and middleware for robust security.
          </p>
        </div>
        <div className="p-6 bg-background border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-2">Modern</h2>
          <p className="color-secondary">
            Powered by Next.js and Tailwind CSS for a cutting-edge experience.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center color-secondary">
        <p>
          &copy; {new Date().getFullYear()} Enterprise App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
