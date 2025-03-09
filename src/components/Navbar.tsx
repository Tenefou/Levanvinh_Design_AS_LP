function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <img className="logo" src="/Logo.png" alt="logo" />
      </div>
      <div>
        <button className="cta-button">Gjør en avtale</button>
      </div>
    </nav>
  );
}

export default Navbar;
