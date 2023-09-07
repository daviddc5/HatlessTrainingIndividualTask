import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
