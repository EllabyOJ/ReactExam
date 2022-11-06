import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h3>
        <Link to="/" className="logo">
        Ella's Repo
        </Link>
      </h3>
      <a
        href="https://github.com/EllabyOJ"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
      >
        Github
      </a>
    </nav>
  );
};

export default Navbar;
