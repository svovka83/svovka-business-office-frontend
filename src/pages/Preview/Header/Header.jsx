import Logo from "./Logo";
import Menu from "./Menu";
import Socials from "./Socials";

const Header = () => {
  return (
      <div className="header">
        <Logo />
        <Menu />
        <Socials />
      </div>
  );
};

export default Header;
