import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "Home", label: "Home" },
  { id: "AboutMe", label: "About Me" },
  { id: "Experience", label: "Experience" },
  { id: "Skills", label: "Skills" },
  { id: "Awards", label: "Awards" },
  { id: "Contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("Home");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);

        if (visibleSections[0]) {
          const id = visibleSections[0].target.id;
          setActiveSection(id);
        }
      },
      {
        root: null,
        threshold: 0.4, // adjust how much should be visible to count as active
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkBaseClasses =
    "text-sm lg:text-base transition-colors relative";
  const inactiveClasses = "text-gray-300 hover:text-white";
  const activeClasses = "text-white";

  const underlineBase =
    "absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300";
  const underlineInactive = "w-0 bg-blue-400";
  const underlineActive = "w-full bg-blue-400";

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 md:space-x-3 group cursor-pointer">
            <div>
              <img
                src="assets/logo.png"
                className="w-6 sm:w-8"
                alt="Minh Tran"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Minh</span>
              <span className="text-blue-400">Tran</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {sections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${linkBaseClasses} ${
                    isActive ? activeClasses : inactiveClasses
                  }`}
                >
                  {item.label}
                  <span
                    className={`${underlineBase} ${
                      isActive ? underlineActive : underlineInactive
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() =>
              setMobileMenuIsOpen((prev) => !prev)
            }
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        style={{
          maxHeight: mobileMenuIsOpen
            ? `${menuRef.current?.scrollHeight ?? 0}px`
            : "0px",
        }}
        className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/50 overflow-hidden transition-all duration-300"
      >
        <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
          {sections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm lg:text-base ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setMobileMenuIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}