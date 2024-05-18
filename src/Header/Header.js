import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/register">
        <button>Registration</button>
      </Link>
    </div>
  );
};

export default Header;
