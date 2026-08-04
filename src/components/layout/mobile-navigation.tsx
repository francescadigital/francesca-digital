"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
] as const;

export function MobileNavigation() {
  const pathname = usePathname();
  const navigationId = useId();

  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");

      firstLink?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      triggerRef.current?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!rootRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  function closeNavigation() {
    setIsOpen(false);
  }

  return (
    <div ref={rootRef} className="relative md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={navigationId}
        onClick={() => {
          setIsOpen((currentState) => !currentState);
        }}
        className="group border-border text-foreground hover:border-foreground/40 hover:bg-surface focus-visible:ring-accent focus-visible:ring-offset-background flex size-10 items-center justify-center rounded-full border transition-[border-color,background-color] duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <span
          aria-hidden="true"
          className="relative flex size-4 flex-col justify-center gap-1"
        >
          <span
            className={[
              "h-px w-4 bg-current transition-transform duration-200",
              isOpen ? "translate-y-[2.5px] rotate-45" : "",
            ].join(" ")}
          />

          <span
            className={[
              "h-px w-4 bg-current transition-transform duration-200",
              isOpen ? "-translate-y-[2.5px] -rotate-45" : "",
            ].join(" ")}
          />
        </span>
      </button>

      {isOpen ? (
        <nav
          ref={panelRef}
          id={navigationId}
          aria-label="Mobile navigation"
          className="border-border bg-surface absolute top-14 right-0 w-[min(18rem,calc(100vw-2.5rem))] rounded-lg border p-2 shadow-2xl shadow-black/30"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeNavigation}
                  className="text-muted hover:bg-card hover:text-foreground focus-visible:bg-card focus-visible:text-foreground focus-visible:ring-accent flex min-h-12 items-center rounded-md px-4 text-sm transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-inset"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-border mt-2 border-t pt-2">
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              onClick={closeNavigation}
              className="bg-accent text-accent-foreground hover:bg-accent-hover focus-visible:ring-accent focus-visible:ring-offset-surface flex min-h-12 items-center justify-center rounded-md px-4 text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Start a project
            </Link>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
