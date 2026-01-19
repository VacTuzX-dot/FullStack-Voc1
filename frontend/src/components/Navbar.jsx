import { useState, useEffect } from "react";
import { navigate } from "astro:transitions/client";
import { cardData } from "./Card.jsx";

export default function Navbar({ pathname: initialPathname = "/" }) {
  const [tokenState, setToken] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [currentPath, setCurrentPath] = useState(initialPathname);

  // Normalize path by removing trailing slash (except for root "/")
  const normalizePath = (path) => {
    return path === "/" ? path : path.replace(/\/$/, "");
  };

  const isActive = (href) => normalizePath(currentPath) === normalizePath(href);

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("token");
    setToken(token);

    // Update path on mount and subsequent navigations
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();

    // Listen for Astro's View Transition events
    document.addEventListener("astro:page-load", updatePath);

    return () => {
      document.removeEventListener("astro:page-load", updatePath);
    };
  }, []);

  const handleSignOut = () => {
    if (!isClient) return;
    localStorage.removeItem("token");
    setToken(null);
    navigate("/signin/");
  };

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const closeNavbar = () => setIsCollapsed(true);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(query.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const filteredResults = cardData
    .filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      const query = searchQuery.toLowerCase();
      const aTitleLower = a.title.toLowerCase();
      const bTitleLower = b.title.toLowerCase();

      // Prioritize exact title match at start
      const aStartsWith = aTitleLower.startsWith(query);
      const bStartsWith = bTitleLower.startsWith(query);

      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;

      return 0; // Keep original order if same priority
    });

  const navLinks = [
    { href: "/", icon: "bi-house", label: "Home" },
    { href: "/about/", icon: "bi-info-circle", label: "About" },
    { href: "/service/", icon: "bi-gear", label: "Services" },
    { href: "/contact/", icon: "bi-envelope", label: "Contact" },
  ];

  if (!isClient) {
    return (
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">
          <a
            href="/"
            className="navbar-brand fw-bold d-flex align-items-center"
          >
            <img
              src="/images/logo.png"
              alt="อินEar Logo"
              style={{
                width: "36px",
                height: "36px",
                objectFit: "contain",
                marginRight: "8px",
              }}
            />
            อินEar
          </a>
          <div className="d-none d-lg-flex gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        {/* Brand */}
        <a
          href="/"
          className="navbar-brand fw-bold text-primary d-flex align-items-center"
        >
          <img
            src="/images/logo.png"
            alt="อินEar Logo"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "contain",
              marginRight: "8px",
            }}
          />
          อินEar
        </a>

        {/* Search - Desktop */}
        <form
          className="d-none d-lg-flex mx-auto position-relative"
          style={{ width: "300px" }}
          onSubmit={handleSearchSubmit}
        >
          <div className="input-group">
            <input
              type="search"
              className="form-control border-end-0"
              placeholder="ค้นหา IEM..."
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setShowResults(searchQuery.length > 0)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary border-start-0"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Search Results Dropdown */}
          {showResults && (
            <div
              className="position-absolute top-100 start-0 w-100 bg-white border rounded-3 shadow-lg mt-1"
              style={{ zIndex: 1050, maxHeight: "300px", overflowY: "auto" }}
            >
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <a
                    key={item.id}
                    href={`/?search=${encodeURIComponent(item.title)}`}
                    className="d-flex align-items-center gap-3 p-2 text-decoration-none text-dark border-bottom"
                    style={{ transition: "background 0.2s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                    <div>
                      <div className="fw-medium small">{item.title}</div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="p-3 text-center text-muted small">
                  <i className="bi bi-emoji-frown me-2"></i>ไม่พบผลลัพธ์
                </div>
              )}
            </div>
          )}
        </form>

        {/* Mobile Toggle */}
        <div className="d-lg-none d-flex align-items-center gap-2">
          {tokenState ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-outline-danger"
            >
              <i className="bi bi-box-arrow-right"></i>
            </button>
          ) : currentPath === "/signin" || currentPath === "/signin/" ? (
            <a href="/signup/" className="btn btn-sm btn-primary">
              <i className="bi bi-person-plus"></i>
            </a>
          ) : currentPath === "/signup" || currentPath === "/signup/" ? (
            <a href="/signin/" className="btn btn-sm btn-primary">
              <i className="bi bi-person"></i>
            </a>
          ) : (
            <a href="/signin/" className="btn btn-sm btn-primary">
              <i className="bi bi-person"></i>
            </a>
          )}
          <button className="navbar-toggler border-0" onClick={toggleNavbar}>
            <i className={`bi ${isCollapsed ? "bi-list" : "bi-x"} fs-4`}></i>
          </button>
        </div>

        {/* Collapsible Nav */}
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
        >
          {/* Mobile Search */}
          <form className="d-lg-none my-3" onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="ค้นหา IEM..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          {/* Nav Links */}
          <ul className="navbar-nav ms-auto gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded ${
                    isActive(link.href) ? "bg-primary text-white" : ""
                  }`}
                  onClick={closeNavbar}
                >
                  <i className={`bi ${link.icon} me-2`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Auth */}
          <div className="d-none d-lg-flex ms-3">
            {tokenState ? (
              <button
                onClick={handleSignOut}
                className="btn btn-outline-danger btn-sm"
              >
                <i className="bi bi-box-arrow-right me-1"></i>Sign Out
              </button>
            ) : currentPath === "/signin" || currentPath === "/signin/" ? (
              <a href="/signup/" className="btn btn-primary btn-sm">
                <i className="bi bi-person-plus me-1"></i>Sign Up
              </a>
            ) : currentPath === "/signup" || currentPath === "/signup/" ? (
              <a href="/signin/" className="btn btn-primary btn-sm">
                <i className="bi bi-person me-1"></i>Sign In
              </a>
            ) : (
              <a href="/signin/" className="btn btn-primary btn-sm">
                <i className="bi bi-person me-1"></i>Sign In
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
