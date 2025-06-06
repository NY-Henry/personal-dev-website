import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Store scroll positions for each route
const scrollPositions = new Map<string, number>();
const MAX_STORED_POSITIONS = 50; // Limit memory usage

export interface ScrollRestorationOptions {
  smoothScrollOnNewPage?: boolean;
  debounceMs?: number;
}

export const useScrollRestoration = (
  options: ScrollRestorationOptions = {}
) => {
  const { smoothScrollOnNewPage = false, debounceMs = 100 } = options;
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousKey = useRef<string | null>(null);

  useEffect(() => {
    const currentKey = location.key || location.pathname;

    // Save previous position before handling new navigation
    if (previousKey.current && previousKey.current !== currentKey) {
      scrollPositions.set(previousKey.current, window.scrollY);

      // Clean up old positions to prevent memory leaks
      if (scrollPositions.size > MAX_STORED_POSITIONS) {
        const oldestKey = scrollPositions.keys().next().value;
        if (oldestKey) {
          scrollPositions.delete(oldestKey);
        }
      }
    }

    if (navigationType === "PUSH") {
      // For new page navigation, scroll to top
      const scrollBehavior = smoothScrollOnNewPage ? "smooth" : "instant";
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    } else if (navigationType === "POP") {
      // For back/forward navigation, restore previous position
      const savedPosition = scrollPositions.get(currentKey) || 0;
      // Use setTimeout to ensure DOM is fully rendered
      setTimeout(() => {
        window.scrollTo({ top: savedPosition, behavior: "instant" });
      }, 0);
    }

    previousKey.current = currentKey;

    // Save scroll position when user scrolls
    const handleScroll = () => {
      scrollPositions.set(currentKey, window.scrollY);
    };

    // Throttle scroll events for better performance
    let scrollTimeout: number;
    const throttledHandleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(handleScroll, debounceMs);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      // Save current position before cleanup
      scrollPositions.set(currentKey, window.scrollY);
      window.removeEventListener("scroll", throttledHandleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [location, navigationType, smoothScrollOnNewPage, debounceMs]);

  // Save scroll position when the component unmounts or page unloads
  useEffect(() => {
    const handleBeforeUnload = () => {
      const currentKey = location.key || location.pathname;
      scrollPositions.set(currentKey, window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

  // Return utility functions for manual scroll control
  return {
    scrollToTop: (smooth = false) => {
      window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
    },
    getScrollPosition: () => {
      const currentKey = location.key || location.pathname;
      return scrollPositions.get(currentKey) || 0;
    },
    clearScrollHistory: () => {
      scrollPositions.clear();
    },
  };
};
