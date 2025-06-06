import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ScrollToTopButton from "./ScrollToTopButton.tsx";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

const Layout = () => {
  // Initialize scroll restoration
  // You can customize the behavior by passing options:
  // useScrollRestoration({ smoothScrollOnNewPage: true, debounceMs: 150 });
  useScrollRestoration();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Optional: Scroll to top button */}
      <ScrollToTopButton showAfter={400} />
    </div>
  );
};

export default Layout;
