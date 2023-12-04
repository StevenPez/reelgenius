import { Outlet, Link } from "react-router-dom";

function Header(props) {
  return(
    <header className="App-header">
      <div class="navBar">
        <>
          <>
            <Link to="/">Home</Link>
          </>
          <>
            <Link to="/Preferences">Preferences</Link>
          </>
          <>
            <Link to="/Recommendations">Recommendations</Link>
          </>
          <>
            <Link to="/History">History</Link>
          </>
        </>
      </div>
      <Outlet />
    </header>
  );
}

export default Header;