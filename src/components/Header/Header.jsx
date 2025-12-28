import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white ">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 ">
        {/* ↑ slightly taller header */}

        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Kuldeep Thakur Logo"
            className="h-12 w-12"
          />
          <span className="text-2xl text-primary font-sans font-light">
            Kuldeep Singh Thakur
          </span>
        </div>

        {/* Navigation */}
        <ul className="hidden items-center space-x-12 md:flex font-light mt-8">
          <li>
            <a href="#home" className="text-lg text-gray-700 hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg text-gray-700 hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-lg text-gray-700 hover:text-primary">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg text-gray-700 hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-lg text-gray-700 hover:text-primary">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg text-gray-700 hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
