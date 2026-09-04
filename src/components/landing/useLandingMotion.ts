import { useEffect, type RefObject } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const PRECISE_POINTER = "(hover: hover) and (pointer: fine)";

type RevealRole =
  "eyebrow" | "heading" | "copy" | "action" | "media" | "image" | "image-up" | "panel" | "seal";

const revealTokens: Record<
  Exclude<RevealRole, "image" | "image-up" | "panel">,
  { delay: number; duration: number; opacity: number; scale?: number; y: number }
> = {
  eyebrow: { delay: 0, duration: 480, opacity: 0.15, y: 8 },
  heading: { delay: 70, duration: 680, opacity: 0.08, y: 24 },
  copy: { delay: 160, duration: 620, opacity: 0.1, y: 15 },
  action: { delay: 240, duration: 500, opacity: 0.1, scale: 0.98, y: 10 },
  media: { delay: 170, duration: 820, opacity: 0.08, scale: 0.985, y: 22 },
  seal: { delay: 160, duration: 760, opacity: 0.08, scale: 0.94, y: 14 },
};

function playAndRelease(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
) {
  if (typeof element.animate !== "function") return;

  const animation = element.animate(keyframes, {
    easing: EASE,
    fill: "both",
    ...options,
  });

  void animation.finished.then(() => animation.cancel()).catch(() => undefined);
}

function revealElement(element: HTMLElement, mobile: boolean) {
  const role = element.dataset["motion"] as RevealRole | undefined;
  if (!role) return;

  if (role === "image" || role === "image-up" || role === "panel") {
    const vertical = role === "image-up";
    const panel = role === "panel";
    const clipStart = vertical ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)";
    const duration = panel ? 860 : 980;
    const delay = panel ? 20 : 110;

    playAndRelease(
      element,
      [
        { clipPath: clipStart, opacity: panel ? 0.35 : 0.18 },
        { clipPath: "inset(0 0 0 0)", opacity: 1 },
      ],
      { delay, duration },
    );

    const image = element.querySelector<HTMLElement>("img");
    if (image) {
      playAndRelease(
        image,
        [
          { transform: `scale(${mobile ? 1.025 : 1.05})`, opacity: 0.72 },
          { transform: "scale(1)", opacity: 1 },
        ],
        { delay, duration: duration + 120 },
      );
    }
    return;
  }

  const token = revealTokens[role];
  const distance = mobile ? Math.min(token.y, 18) : token.y;
  const start: Keyframe = {
    opacity: token.opacity,
    transform: `translate3d(0, ${distance}px, 0)${token.scale ? ` scale(${token.scale})` : ""}`,
  };

  playAndRelease(element, [start, { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }], {
    delay: token.delay,
    duration: token.duration,
  });

  if (role === "eyebrow") {
    const line = element.querySelector<HTMLElement>("span:first-child");
    if (line) {
      playAndRelease(
        line,
        [
          { opacity: 0.25, transform: "scaleX(0)" },
          { opacity: 1, transform: "scaleX(1)" },
        ],
        { delay: 80, duration: 620 },
      );
    }
  }
}

function revealSection(section: HTMLElement, mobile: boolean) {
  section.classList.add("section-entered");
  section.querySelectorAll<HTMLElement>("[data-motion]").forEach((element) => {
    revealElement(element, mobile);
  });

  section.querySelectorAll<HTMLElement>("[data-motion-stagger]").forEach((group, groupIndex) => {
    group.querySelectorAll<HTMLElement>(":scope > [data-motion-item]").forEach((item, index) => {
      const delay = 140 + groupIndex * 40 + Math.min(index, 6) * (mobile ? 58 : 76);
      playAndRelease(
        item,
        [
          {
            opacity: 0.08,
            transform: `translate3d(0, ${mobile ? 16 : 22}px, 0) scale(0.985)`,
          },
          { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
        ],
        { delay, duration: mobile ? 520 : 620 },
      );
    });
  });
}

export function useLandingMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    const precisePointer = window.matchMedia(PRECISE_POINTER);
    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-section]"));
    const header = root.querySelector<HTMLElement>(".site-header");
    const parallaxElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-motion-parallax]"),
    );
    let scrollFrame = 0;

    const updateScrollEffects = () => {
      scrollFrame = 0;
      header?.classList.toggle("site-header-scrolled", window.scrollY > 20);

      if (reducedMotion.matches || !precisePointer.matches || window.innerWidth < 960) {
        parallaxElements.forEach((element) => element.style.removeProperty("--motion-parallax-y"));
        return;
      }

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (elementCenter - viewportCenter) / window.innerHeight),
        );
        const range = Number(element.dataset["motionParallaxRange"] ?? 20);
        element.style.setProperty("--motion-parallax-y", `${(-progress * range).toFixed(2)}px`);
      });
    };

    const scheduleScrollEffects = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    };

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const section = entry.target as HTMLElement;
                if (!reducedMotion.matches) {
                  revealSection(section, window.innerWidth <= 600);
                }
                observer?.unobserve(section);
              });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
          )
        : null;

    sections.forEach((section) => observer?.observe(section));
    window.addEventListener("scroll", scheduleScrollEffects, { passive: true });
    window.addEventListener("resize", scheduleScrollEffects, { passive: true });
    reducedMotion.addEventListener("change", scheduleScrollEffects);
    precisePointer.addEventListener("change", scheduleScrollEffects);
    updateScrollEffects();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleScrollEffects);
      window.removeEventListener("resize", scheduleScrollEffects);
      reducedMotion.removeEventListener("change", scheduleScrollEffects);
      precisePointer.removeEventListener("change", scheduleScrollEffects);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, [rootRef]);
}

export function useHeroPointerMotion(heroRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    const precisePointer = window.matchMedia(PRECISE_POINTER);
    let frame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const writePosition = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      hero.style.setProperty("--hero-scene-x", `${(-currentX * 4).toFixed(2)}px`);
      hero.style.setProperty("--hero-scene-y", `${(-currentY * 3).toFixed(2)}px`);
      hero.style.setProperty("--hero-light-x", `${(currentX * 7).toFixed(2)}px`);
      hero.style.setProperty("--hero-light-y", `${(currentY * 5).toFixed(2)}px`);
      hero.style.setProperty("--hero-lion-x", `${(currentX * 5).toFixed(2)}px`);
      hero.style.setProperty("--hero-lion-y", `${(currentY * 4).toFixed(2)}px`);
      hero.style.setProperty("--hero-person-x", `${(currentX * 3).toFixed(2)}px`);
      hero.style.setProperty("--hero-person-y", `${(currentY * 2).toFixed(2)}px`);
      hero.style.setProperty("--hero-glow-x", `${(50 + currentX * 20).toFixed(2)}%`);
      hero.style.setProperty("--hero-glow-y", `${(42 + currentY * 16).toFixed(2)}%`);

      if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
        frame = window.requestAnimationFrame(writePosition);
      }
    };

    const schedulePosition = () => {
      if (!frame) frame = window.requestAnimationFrame(writePosition);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !precisePointer.matches || window.innerWidth < 960) return;
      const rect = hero.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1));
      targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1));
      hero.classList.add("hero-pointer-ready");
      schedulePosition();
    };

    const resetPointer = () => {
      targetX = 0;
      targetY = 0;
      schedulePosition();
    };

    const handlePreferenceChange = () => {
      if (reducedMotion.matches || !precisePointer.matches || window.innerWidth < 960) {
        hero.classList.remove("hero-pointer-ready");
        resetPointer();
      }
    };

    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetPointer, { passive: true });
    window.addEventListener("resize", handlePreferenceChange, { passive: true });
    reducedMotion.addEventListener("change", handlePreferenceChange);
    precisePointer.addEventListener("change", handlePreferenceChange);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("resize", handlePreferenceChange);
      reducedMotion.removeEventListener("change", handlePreferenceChange);
      precisePointer.removeEventListener("change", handlePreferenceChange);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [heroRef]);
}
