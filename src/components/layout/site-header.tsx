import Link from "next/link";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-border">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Francesca Digital home"
          className="shrink-0 text-sm font-semibold tracking-[-0.03em] text-foreground"
        >
          Francesca Digital
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
