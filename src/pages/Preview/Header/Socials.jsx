import { MY_GIT } from "../utils/constants";

const Socials = () => {
  return (
    <div>
      <ul className="socials">
        {MY_GIT.map(({ icon, link }) => (
          <li key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              <img className="header_logo" src={icon} alt="my_git" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
