/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link to="/">
              <span>1</span>
            </Link>
          </li>
          <li>
            <Link to="/array-challenge">
              <span>2</span>
            </Link>
          </li>
          <li>
            <Link to="/stop-light">3</Link>
          </li>
          <li>
            <Link to="/hearthstone">
              <span>4</span>
            </Link>
          </li>
          <li>
            <Link to="/hearthstone/card-image">
              <span>?</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
