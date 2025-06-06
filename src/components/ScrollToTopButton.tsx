import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface ScrollToTopButtonProps {
  showAfter?: number; // Show button after scrolling this many pixels
  smooth?: boolean; // Use smooth scrolling
  className?: string; // Additional CSS classes
}

const ScrollToTopButton = ({
  showAfter = 300,
  smooth = true,
  className = "",
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let scrollTimeout: number;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(toggleVisibility, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "instant",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-primary-color text-white rounded-full shadow-lg hover:bg-primary-hover transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2 ${className}`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
