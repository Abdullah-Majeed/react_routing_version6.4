import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header
      className="header"
    >
      <nav>
        <ul>
          <li>
            <NavLink
              // className="active"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              // className="active"
              // activeClassName={classes.active}
              to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
