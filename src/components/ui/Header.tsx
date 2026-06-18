import Link from "next/link";
import { Logo } from "./Logo";

interface HeaderProps {
  backHref?: string;
  backLabel?: string;
  rightAction?: React.ReactNode;
}

export function Header({ backHref, backLabel, rightAction }: HeaderProps) {
  return (
    <header className="relative z-10 border-b border-white/40 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {backHref ? (
          <Link
            href={backHref}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {backLabel || "Back"}
          </Link>
        ) : (
          <Logo />
        )}

        {rightAction || (
          <Link href="/admin/login" className="btn-outline text-sm">
            Admin Login
          </Link>
        )}
      </div>
    </header>
  );
}
