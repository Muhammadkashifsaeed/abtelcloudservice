import Link from "next/link";
import { Cloud } from "lucide-react";
import { Container } from "@/components/ui";
import { publicEnv } from "@/lib/env";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Stack", href: "#stack" },
  { label: "Architecture", href: "#architecture" },
  { label: "Form & API Demo", href: "#demo" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-semibold tracking-tight text-foreground transition-opacity hover:opacity-85"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Cloud className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>{publicEnv.NEXT_PUBLIC_APP_NAME}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#demo"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Get Started
        </Link>
      </Container>
    </header>
  );
}
