import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(opts?: { threshold?: number; once?: boolean }) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            if (opts?.once !== false) io.unobserve(el);
          } else if (opts?.once === false) {
            el.classList.remove("is-in");
          }
        });
      },
      { threshold: opts?.threshold ?? 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts?.once, opts?.threshold]);
  return ref;
}

/** Helper to attach a reveal to an existing ref-free element via callback. */
export function attachReveal(node: HTMLElement | null) {
  if (!node) return;
  if (typeof IntersectionObserver === "undefined") {
    node.classList.add("is-in");
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          node.classList.add("is-in");
          io.unobserve(node);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  io.observe(node);
}