import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import { Suspense } from "react";

import { routes } from "./routes";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
