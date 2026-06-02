function Navbar({ menuOpen, navLinks, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
        <span>Nikhitha Kyatham</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="site-navigation" className={menuOpen ? "nav-links open" : "nav-links"}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
