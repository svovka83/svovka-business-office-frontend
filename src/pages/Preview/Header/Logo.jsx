import { Link } from "react-router-dom";

import logo from "../images/4276167_2220328.jpg";

const Logo = () => {
  return (
    <div>
      <Link to="/preview">
        <img className="header_logo" src={logo} alt="PreviewLogo" />
      </Link>
    </div>
  );
};

export default Logo;
